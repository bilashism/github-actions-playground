import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from '../../error/ErrorFallback';
import { logError } from '../../error/logError';

import { BecomeAPartner } from './BecomeAPartner';
import { ChoseARole } from './ChoseARole';
import { Header } from './Header';
import { WhyBestPlatform } from './WhyBestPlatform';

type IProps = {
  error: boolean;
};

const WorkWithUsElement = (props: IProps) => {
  // console.log('Home Element props', props);

  // if (props.error) {
  //   throw new Error('hello error world');
  // }

  return (
    <>
      <Header />
      <WhyBestPlatform />
      <ChoseARole />
      <BecomeAPartner />
    </>
  );
};

export const WorkWithUs = () => {
  const [isError, setIsError] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleReset = (details: any) => {
    // Reset the state of your app so the error doesn't happen again
    setIsError(false);
    // console.log(details);
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logError}
      onReset={handleReset}
    >
      <WorkWithUsElement error={isError} />
    </ErrorBoundary>
  );
};
