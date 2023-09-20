import { createContext, useContext, useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ExtendHead } from '../../components/ExtendHead';
import { ListWithTitle } from '../../components/ui/ListWithTitle';
import { PageTopBackground } from '../../components/ui/PageTopBackground';
import { ErrorFallback } from '../../error/ErrorFallback';
import { logError } from '../../error/logError';
import { ErrorBoundaryResetHandler } from '../../error/utils';
import {
  CARDHOLDER_CREDENTIALS_STORAGE_AGREEMENT_DATA,
  EVENT_PROMPTING_TRANSACTION_DATA,
  MERCHANT_DISCLOSURES_DATA,
} from '../CredentialOnFile';

import { AgreementInquiry } from './AgreementInquiry';
import { Header } from './Header';

type CookiePolicyContextValue = object;
const CookiePolicyContext = createContext<CookiePolicyContextValue>({});

const handleErrorBoundaryReset: ErrorBoundaryResetHandler = (details) => {
  // Reset the state of your app so the error doesn't happen again
  console.log(details);
};

export const CookiePolicy = () => {
  const cookiePolicyContextValue = useMemo(() => ({}), []);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logError}
      onReset={handleErrorBoundaryReset}
    >
      <CookiePolicyContext.Provider value={cookiePolicyContextValue}>
        <ExtendHead title="Cookie Policy" description="Cookie Policy info" />
        <div className="grid gap-12 xl:gap-20 pb-12">
          <Header />
          <ListWithTitle
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
          />
          <AgreementInquiry />
        </div>
        <PageTopBackground showMainImage showSideImages showOvalShape />
      </CookiePolicyContext.Provider>
    </ErrorBoundary>
  );
};

export const useCookiePolicyContext = () => {
  return useContext(CookiePolicyContext);
};
