import { createContext, useContext, useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ExtendHead } from '../../components/ExtendHead';
import {
  ListWithTitle,
  TListWithTitle,
} from '../../components/ui/ListWithTitle';
import { PageTopBackground } from '../../components/ui/PageTopBackground';
import { ErrorFallback } from '../../error/ErrorFallback';
import { logError } from '../../error/logError';
import { ErrorBoundaryResetHandler } from '../../error/utils';

import { AgreementInquiry } from './AgreementInquiry';
import { Header } from './Header';

type CredentialOnFileContextValue = object;
const CredentialOnFileContext = createContext<CredentialOnFileContextValue>({});

const handleErrorBoundaryReset: ErrorBoundaryResetHandler = (details) => {
  // Reset the state of your app so the error doesn't happen again
  console.log(details);
};
export const CARDHOLDER_CREDENTIALS_STORAGE_AGREEMENT_DATA: TListWithTitle = {
  type: 'unordered',
  title: `Cardholder’s Credentials Storage Agreement`,
  hideTitleSeparator: true,
  items: [
    {
      description: `This Cardholder's Credentials Storage Agreement (referred to as the
        "Agreement") is made between you (also known as the "Cardholder")
        and the Merchant, FullBoosts.`,
    },
    {
      description: `By selecting the relevant tick-box, you fully consent to this
      Agreement and authorize the Merchant, along with its payment
      processing service provider, to securely store and retain your name,
      surname, card expiry date, and PAN number (collectively referred to
      as the Credentials on File or COF). This authorization enables the
      initiation of transactions on your behalf (Merchant-Initiated COF
      Transactions) and/or the processing of transactions initiated by you
      (Cardholder-Initiated COF Transactions) using the stored Credentials
      on File, as indicated below.`,
    },
  ],
};
export const MERCHANT_DISCLOSURES_DATA: TListWithTitle = {
  type: 'unordered',
  title: 'Merchant Disclosures:',
  items: [
    {
      description:
        'Your Credentials on File will be used for Merchant-Initiated COF Transactions',
    },
    {
      name: 'Your Service Type:',
      isNameColored: true,
      description: `Access to appropriate digital content on a weekly/monthly basis.`,
    },
    {
      description:
        'Fixed dates or intervals of scheduled Merchant-Initiated COF Transactions occur on a monthly basis.',
    },
  ],
};
export const EVENT_PROMPTING_TRANSACTION_DATA: TListWithTitle = {
  type: 'ordered',
  title: 'Event prompting the Transaction:',
  extendedTitle: 'Not applicable.',
  items: [
    {
      description: `the transaction confirmation will include the following details related to this Agreement: card number, transaction amount, surcharges (if applicable), transaction currency, transaction date, authorization code, and the Merchant's location.`,
    },
    {
      description: `You will receive prior notification of any changes to this Agreement. Changes related to scheduled Merchant-Initiated COF Transactions (with fixed, regular intervals) will be communicated 7 (seven) business days before they become effective. Changes concerning unscheduled Merchant-Initiated COF Transactions or Cardholder-Initiated COF Transactions will be notified 2 (two) business days in advance.`,
    },
    {
      description:
        'This Agreement becomes effective upon successful authorization or account verification by your card issuer and your consent to the Agreement received by the Merchant. It will remain valid until terminated by you or the Merchant, as per the Cancellation policy.',
    },
    {
      description: `For information on the Merchant's Cancellation and refund policies, please refer to the Terms and Conditions accessible via the following link: Terms and Conditions.`,
    },
  ],
};
export const CredentialOnFile = () => {
  const credentialOnFileContextValue = useMemo(() => ({}), []);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logError}
      onReset={handleErrorBoundaryReset}
    >
      <CredentialOnFileContext.Provider value={credentialOnFileContextValue}>
        <ExtendHead
          title="Credential On File"
          description="Credential On File info"
        />
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
      </CredentialOnFileContext.Provider>
    </ErrorBoundary>
  );
};

export const useCredentialOnFileContext = () => {
  return useContext(CredentialOnFileContext);
};
