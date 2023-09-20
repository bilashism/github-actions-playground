import { createContext, useContext, useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';

import { PageTopBackground } from '../../components/ui/PageTopBackground';
import { ErrorFallback } from '../../error/ErrorFallback';
import { logError } from '../../error/logError';
import { ErrorBoundaryResetHandler } from '../../error/utils';

import { Header } from './Header';
import { Main } from './Main';

type GamesSingleContextType = {
  uid: string;
};
const GamesSingleContext = createContext<GamesSingleContextType | undefined>(
  undefined
);

const handleErrorBoundaryReset: ErrorBoundaryResetHandler = (details) => {
  // Reset the state of your app so the error doesn't happen again
  console.log(details);
};

export const GamesSingle = () => {
  const { uid } = useParams<{ uid: string }>();
  console.log(uid);

  const gamesSingleContextValue = useMemo(() => {
    if (!uid) {
      return undefined; // No context value if uid is not defined
    }
    const contextValue: GamesSingleContextType = {
      uid,
    };
    return contextValue;
  }, [uid]);

  if (!gamesSingleContextValue) {
    return <p className="text-red-500 text-center">No valid game ID found!</p>;
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logError}
      onReset={handleErrorBoundaryReset}
    >
      <GamesSingleContext.Provider value={gamesSingleContextValue}>
        <Header />
        <Main />
        <PageTopBackground showMainImage showOvalShape />
      </GamesSingleContext.Provider>
    </ErrorBoundary>
  );
};

export const useGamesSingleContext = () => {
  const context = useContext(GamesSingleContext);
  if (!context) {
    throw new Error('GamesSingleContext is undefined');
  }
  return context;
};
