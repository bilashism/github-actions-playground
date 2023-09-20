import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';

import { PageTopBackground } from '../../components/ui/PageTopBackground';
import { ErrorFallback } from '../../error/ErrorFallback';
import { logError } from '../../error/logError';
import { FEATURED_GUIDES_DATA } from '../Guides/FeaturedGuides';

import { Header } from './Header';
import { Main } from './Main';

type IProps = {
  error: boolean;
};

const OrdersElement = (props: IProps) => {
  // console.log('Home Element props', props);

  // if (props.error) {
  //   throw new Error('hello error world');
  // }

  const { id } = useParams();

  const CURRENT_GUIDE = FEATURED_GUIDES_DATA.find((guide) => guide.id === id);

  // if (!CURRENT_GUIDE) {
  //   return <p className="">No order found!</p>;
  // }

  return (
    <div className="">
      <Header />
      <Main />
      <PageTopBackground showMainImage showOvalShape />
    </div>
  );
};

export const Orders = () => {
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
      <OrdersElement error={isError} />
    </ErrorBoundary>
  );
};
