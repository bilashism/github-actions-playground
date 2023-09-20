import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';

import { LoadingCircle } from '../../components/LoadingCircle';
import { PageTopBackground } from '../../components/ui/PageTopBackground';
import { ErrorFallback } from '../../error/ErrorFallback';
import { logError } from '../../error/logError';
import { ErrorBoundaryResetHandler } from '../../error/utils';
import { GameCurrency } from '../Currencies';
import { IGamesAndCategories } from '../GamesSingle/components/GameOffers';

import { Header } from './Header';
import { Main } from './Main';

type SingleCurrencyContextType = {
  uid: string;
  gameName: string;
  gameCurrency: GameCurrency;
};

const SingleCurrencyContext = createContext<
  SingleCurrencyContextType | undefined
>(undefined);

const handleErrorBoundaryReset: ErrorBoundaryResetHandler = (details) => {
  // Reset the state of your app so the error doesn't happen again
  console.log(details);
};

export const CurrenciesSingle = () => {
  const { uid } = useParams<{ uid: string }>();
  const [gameCurrency, setGameCurrency] = useState<GameCurrency>();
  const [gameName, setGameName] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const singleCurrencyContextValue = useMemo(() => {
    if (!uid || !gameName || !gameCurrency) {
      return undefined;
    }

    const contextValue: SingleCurrencyContextType = {
      uid,
      gameName,
      gameCurrency,
    };
    return contextValue;
  }, [uid, gameCurrency, gameName]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true initially

      try {
        const resCurrency = await fetch('/data/game-currencies.json');
        const dataCurrency: GameCurrency[] = await resCurrency.json();
        const currentGameCurrency = dataCurrency.find(
          (item) => item?.uid === uid
        );
        setGameCurrency(currentGameCurrency);

        if (currentGameCurrency) {
          const resGames = await fetch('/data/gamesAndCategories.json');
          const dataGames: IGamesAndCategories[] = await resGames.json();
          const currentGameName = dataGames.find(
            (game) => game?.uid === currentGameCurrency?.gameUid
          )?.name;
          setGameName(currentGameName);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Set loading state to false when the fetch is complete
      }
    };

    fetchData();
  }, [uid]);

  if (isLoading) {
    return <LoadingCircle />;
  }

  if (!singleCurrencyContextValue) {
    return (
      <p className="text-red-500 text-center">No valid game currency found!</p>
    );
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logError}
      onReset={handleErrorBoundaryReset}
    >
      <SingleCurrencyContext.Provider value={singleCurrencyContextValue}>
        <Header />
        <Main />
        <PageTopBackground showMainImage showSideImages showOvalShape />
      </SingleCurrencyContext.Provider>
    </ErrorBoundary>
  );
};

export const useSingleCurrencyContext = () => {
  const context = useContext(SingleCurrencyContext);
  if (!context) {
    throw new Error('SingleCurrencyContext is not available');
  }
  return context;
};
