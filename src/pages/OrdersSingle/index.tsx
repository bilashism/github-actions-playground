import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';

import { PageTopBackground } from '../../components/ui/PageTopBackground';
import { ErrorFallback } from '../../error/ErrorFallback';
import { logError } from '../../error/logError';
import { ORDERS_DATA } from '../Orders/Main';

import { Header } from './Header';
import { Main } from './Main';

type IProps = {
  error: boolean;
};

const OrdersSingleElement = (props: IProps) => {
  // console.log('Home Element props', props);

  // if (props.error) {
  //   throw new Error('hello error world');
  // }

  const { uid } = useParams<{ uid: string }>();

  if (!uid) {
    return <p className="text-red-500 text-center">No valid order ID found!</p>;
  }

  const order = ORDERS_DATA?.find((item) => item?.uid === uid);

  if (!order) {
    return <p className="text-red-500 text-center">No order found!</p>;
  }

  const { status } = order;

  return (
    <div className="">
      <Header />
      <Main />
      <PageTopBackground showMainImage showOvalShape />
    </div>
  );
};

export const OrdersSingle = () => {
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
      <OrdersSingleElement error={isError} />
    </ErrorBoundary>
  );
};
