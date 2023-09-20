import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';

import { ErrorFallback } from '../../error/ErrorFallback';
import { logError } from '../../error/logError';

import { Header } from './Header';
import { Main } from './Main';

type IProps = {
  error: boolean;
};

const RateOrderElement = (props: IProps) => {
  // console.log('Home Element props', props);

  // if (props.error) {
  //   throw new Error('hello error world');
  // }

  const { uid } = useParams<{ uid: string }>();

  // const CURRENT_GUIDE = FEATURED_GUIDES_DATA.find((guide) => guide.uid === uid);

  // if (!CURRENT_GUIDE) {
  //   return <p className="">No order found!</p>;
  // }

  return (
    <div className="relative z-0 isolate">
      <Header />
      <Main />
      {/* background images */}
      {/* <figure className="flex justify-end items-center absolute -z-30 top-0 left-0 pointer-events-none select-none">
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
      </figure> */}
      {/* <figure className="flex justify-end items-center absolute -z-20 top-14 left-0 opacity-40 pointer-events-none select-none">
        <picture className="">
          <source media="(min-width: 350px)" srcSet={headerLeftImgSrc} />
          <img
            src={headerLeftImgSrc}
            alt="description"
            className="w-40 xl:w-auto h-auto"
            loading="lazy"
            width="387"
            height="581"
            decoding="async"
            // fetchPriority="low"
          />
        </picture>
      </figure>
      <figure className="flex justify-end items-center absolute -z-20 top-36 right-0 opacity-30 pointer-events-none select-none">
        <picture className="flex items-center justify-center">
          <source media="(min-width: 350px)" srcSet={headerRightImgSrc} />
          <img
            src={headerRightImgSrc}
            alt="description"
            className="w-40 xl:w-auto h-auto"
            loading="lazy"
            width="299"
            height="469"
            decoding="async"
            // fetchPriority="low"
          />
        </picture>
      </figure> */}
      {/* background colors */}
      <figure className="absolute -z-10 w-52 aspect-square left-[-5%] top-14 blur-3xl rounded-circle bg-orange-500/10" />
      <figure className="absolute -z-10 w-56 aspect-square left-1/2 -translate-x-1/2 top-[10%] -translate-y-1/2 blur-3xl rounded-circle bg-brand-purple-550/10" />
      <figure className="absolute -z-10 w-56 aspect-square -right-0 top-36 blur-3xl rounded-circle bg-brand-yellow-550/10 " />

      <figure className="absolute -z-10 w-96 aspect-square -left-48 bottom-0 -rotate-12 blur-3xl rounded-circle bg-brand-blue-550/10 opacity-50" />
    </div>
  );
};

export const RateOrder = () => {
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
      <RateOrderElement error={isError} />
    </ErrorBoundary>
  );
};
