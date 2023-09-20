import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';

import { PageTopBackground } from '../../components/ui/PageTopBackground';
import { ErrorFallback } from '../../error/ErrorFallback';
import { logError } from '../../error/logError';
import { ErrorBoundaryResetHandler } from '../../error/utils';

export type TFaction = 'horde' | 'alliance';
export type TConsole = 'ps' | 'xbox' | 'ps/xbox';
export type CurrencyServer = {
  id: string;
  uid: string;
  currencyUid: string;
  gameUid: string;
  name: string;
  deliveryTime: string;
  inStock: number;
  quantity: number;
  price: number;
  rating: number;
  reviewCount: number;
  reviews: ServerReview[];
};
export type ServerReview = {
  name: string;
  rating: number;
  date: string;
  reviewText: string;
};
export type CurrencyServerGold = {
  faction: TFaction;
  details: {
    minPurchase: number;
    level: number;
    title: string;
    description: string;
  };
} & CurrencyServer;

export type CurrencyServerCoin = {
  console: TConsole;
  details: {
    minPurchase: number;
    level: number;
    title: string;
    description: string;
  };
} & CurrencyServer;
export type TCurrencyFilter = {
  id: string;
  name: string;
  options: string[];
  isMultiSelect: boolean;
};
export type TCurrencyServer = CurrencyServerCoin | CurrencyServerGold;
export type GameCurrency = {
  id: string;
  uid: string;
  gameUid: string;
  name: string;
  description: string;
  filters: TCurrencyFilter[];
  servers: TCurrencyServer[];
};

type CurrenciesContextValue = {
  uid?: string;
  gameCurrencies?: GameCurrency[];
};

const CurrenciesContext = createContext<CurrenciesContextValue>({});

const handleErrorBoundaryReset: ErrorBoundaryResetHandler = (details) => {
  // Reset the state of your app so the error doesn't happen again
  console.log(details);
};

export const Currencies = () => {
  const { uid } = useParams<{ uid: string }>();
  const [gameCurrencies, setGameCurrencies] = useState<GameCurrency[]>();
  const currenciesContextValue = useMemo(
    () => ({ uid, gameCurrencies }),
    [uid, gameCurrencies]
  );

  useEffect(() => {
    if (!gameCurrencies) {
      fetch('/data/game-currencies.json')
        .then((res) => res.json())
        .then((data: GameCurrency[]) => {
          // console.log(offer);
          setGameCurrencies(data);
        })
        .catch(console.error);
    }
  }, [gameCurrencies, uid]);

  if (!uid) {
    return (
      <p className="text-red-500 text-center">
        No valid game currencies found!
      </p>
    );
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logError}
      onReset={handleErrorBoundaryReset}
    >
      <CurrenciesContext.Provider value={currenciesContextValue}>
        {/* <header>header</header> */}
        {/* <main>main</main> */}
        <PageTopBackground showMainImage showSideImages showOvalShape />
      </CurrenciesContext.Provider>
    </ErrorBoundary>
  );
};

export const useSingleCurrencyContext = () => {
  return useContext(CurrenciesContext);
};
