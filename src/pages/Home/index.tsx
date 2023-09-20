/* eslint-disable import/no-unresolved */

import { createContext, useContext, useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ExtendHead } from '../../components/ExtendHead';
import { ErrorFallback } from '../../error/ErrorFallback';
import { logError } from '../../error/logError';
import { ErrorBoundaryResetHandler } from '../../error/utils';

import { BannerSlider } from './BannerSlider';
import { ClientReviews } from './ClientReviews';
import { FeaturedGames } from './FeaturedGames';
import { LatestGamesOffers } from './LatestGamesOffers';
import { WorkWithUsSection } from './WorkWithUs';

type THomeContext = object;
const HomeContext = createContext<THomeContext | undefined>(undefined);

const handleErrorBoundaryReset: ErrorBoundaryResetHandler = (details) => {
  // Reset the state of your app so the error doesn't happen again
  console.log(details);
};

export const Home = () => {
  const homeContextValue = useMemo(() => {
    // if (!{}) {
    //   return undefined;
    // }

    const contextValue: THomeContext = {};
    return contextValue;
  }, []);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logError}
      onReset={handleErrorBoundaryReset}
    >
      <HomeContext.Provider value={homeContextValue}>
        <ExtendHead
          title="Home"
          description="Super Fast delivery. Always 24/7 support. Large stock of any kind of games and items on all servers."
        />
        <BannerSlider />
        <FeaturedGames />
        <LatestGamesOffers />
        <div className="relative isolate z-0 overflow-hidden">
          <ClientReviews />
          <WorkWithUsSection />
          <figure className="absolute -z-10 w-80 h-[36rem] -rotate-12 -left-36 bottom-[10%] blur-xl rounded-circle  bg-[radial-gradient(50.26%_50.56%_at_49.58%_49.98%,rgba(241,99,52,0.15)_0%,rgba(129,55,30,0.08)_42%,rgba(11,18,23,0)_100%)]" />
        </div>
      </HomeContext.Provider>
    </ErrorBoundary>
  );
};

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error('Could not find the Home page context');
  }
  return context;
};
