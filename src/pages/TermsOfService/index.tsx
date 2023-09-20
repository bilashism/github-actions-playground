import { createContext, useContext, useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ExtendHead } from '../../components/ExtendHead';
import { PageTopBackground } from '../../components/ui/PageTopBackground';
import { ErrorFallback } from '../../error/ErrorFallback';
import { logError } from '../../error/logError';
import { ErrorBoundaryResetHandler } from '../../error/utils';

import { Header } from './Header';
import { Main } from './Main';
import { SimpleAddress } from './SimpleAddress';
import { TermsAndConditions } from './TermsAndConditions';

type TermsOfServiceContextValue = object;
const TermsOfServiceContext = createContext<TermsOfServiceContextValue>({});

const handleErrorBoundaryReset: ErrorBoundaryResetHandler = (details) => {
  // Reset the state of your app so the error doesn't happen again
  console.log(details);
};

export const TermsOfService = () => {
  const termsOfServiceContextValue = useMemo(() => ({}), []);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logError}
      onReset={handleErrorBoundaryReset}
    >
      <TermsOfServiceContext.Provider value={termsOfServiceContextValue}>
        <ExtendHead
          title="Terms of service"
          description="Terms of service info"
        />
        <div className="grid gap-12 xl:gap-20 pb-12">
          <Header />
          <TermsAndConditions />
          <Main />
          {/* <ListWithTitle
            payload={CARDHOLDER_CREDENTIALS_STORAGE_AGREEMENT_DATA}
            className="list-none"
          />
          <ListWithTitle
            payload={MERCHANT_DISCLOSURES_DATA}
            className="pl-[1.25rem]"
          />
          <ListWithTitle
            payload={EVENT_PROMPTING_TRANSACTION_DATA}
            className="pl-[1.25rem]"
          /> */}
          <SimpleAddress />
        </div>
        <PageTopBackground showMainImage showSideImages showOvalShape />
      </TermsOfServiceContext.Provider>
    </ErrorBoundary>
  );
};

export const useTermsOfServiceContext = () => {
  return useContext(TermsOfServiceContext);
};
