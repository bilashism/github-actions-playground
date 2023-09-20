import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';

import { GameOffer } from '../../components/ui/OfferCard';
import { PageTopBackground } from '../../components/ui/PageTopBackground';
import { ErrorFallback } from '../../error/ErrorFallback';
import { logError } from '../../error/logError';
import { ErrorBoundaryResetHandler } from '../../error/utils';

import { Header } from './Header';
import { Main } from './Main';

type SingleOfferContextValue = {
  uid?: string;
  gameOffer?: GameOffer;
  setGameOffer?: Dispatch<SetStateAction<GameOffer | undefined>>;
};
const SingleOfferContext = createContext<SingleOfferContextValue>({});

const handleErrorBoundaryReset: ErrorBoundaryResetHandler = (details) => {
  // Reset the state of your app so the error doesn't happen again
  console.log(details);
};

export const OffersSingle = () => {
  const { uid } = useParams<{ uid: string }>();
  const [gameOffer, setGameOffer] = useState<GameOffer>();
  const singleOfferContextValue = useMemo(
    () => ({ uid, gameOffer, setGameOffer }),
    [uid, gameOffer, setGameOffer]
  );

  useEffect(() => {
    if (!gameOffer) {
      fetch('/data/latestOffers.json')
        .then((res) => res.json())
        .then((data: GameOffer[]) => {
          const offer = data?.find((item) => item?.uid === uid);
          // console.log(offer);
          setGameOffer(offer);
        })
        .catch(console.error);
    }
  }, [gameOffer, uid]);

  if (!uid) {
    return (
      <p className="text-red-500 text-center">No valid game offer found!</p>
    );
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logError}
      onReset={handleErrorBoundaryReset}
    >
      <SingleOfferContext.Provider value={singleOfferContextValue}>
        <Header />
        <Main />
        <PageTopBackground showMainImage showSideImages showOvalShape />
      </SingleOfferContext.Provider>
    </ErrorBoundary>
  );
};

export const useSingleOfferContext = () => {
  return useContext(SingleOfferContext);
};
