import { ErrorBoundary } from 'react-error-boundary';

import headerBgImgSrc from '../../assets/images/page-top-background-main.png';
import { ErrorFallback } from '../../error/ErrorFallback';
import { logError } from '../../error/logError';
import { ErrorBoundaryResetHandler } from '../../error/utils';

import { Header } from './Header';
import { Main } from './Main';

const handleErrorBoundaryReset: ErrorBoundaryResetHandler = (details) => {
  // Reset the state of your app so the error doesn't happen again
  console.log(details);
};

export const Support = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logError}
      onReset={handleErrorBoundaryReset}
    >
      <div className="relative z-0 isolate grid gap-4">
        <Header />
        <Main />
        {/* background images */}
        <figure className="flex justify-end items-center absolute -z-30 top-0 left-0 pointer-events-none select-none">
          <picture className="flex items-center justify-center">
            <source media="(min-width: 350px)" srcSet={headerBgImgSrc} />
            <img
              src={headerBgImgSrc}
              alt="description"
              className=""
              loading="lazy"
              width="1920"
              height="854"
              decoding="async"
              // fetchPriority="low"
            />
          </picture>
        </figure>
        {/* background colors */}
        <figure className="absolute -z-10 w-52 aspect-square left-[-5%] top-14 blur-3xl rounded-circle bg-orange-500/10" />
        <figure className="absolute -z-10 w-56 aspect-square left-1/2 -translate-x-1/2 top-52 -translate-y-1/2 blur-3xl rounded-circle bg-brand-purple-550/10" />
        <figure className="absolute -z-10 w-56 aspect-square -right-0 top-36 blur-3xl rounded-circle bg-brand-yellow-550/10 " />
        <figure className="absolute -z-10 w-56 h-96 -left-12 top-1/3 -rotate-12 blur-2xl rounded-circle bg-[radial-gradient(50.26%_50.56%_at_49.58%_49.98%,rgba(241,99,52,0.15)_0%,rgba(129,55,30,0.08)_42%,rgba(11,18,23,0)_100%)]" />
      </div>
    </ErrorBoundary>
  );
};
