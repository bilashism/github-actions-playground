/* eslint-disable import/no-unresolved */

import { ReviewsWidget } from './ReviewsWidget';

export type IBanner = {
  id: string;
  title: {
    regular: {
      1?: string;
      2?: string;
    };
    gradient: {
      1?: string;
      2?: string;
    };
  };
  imageUrl: string;
};

type BannerProps = {
  banner: IBanner;
};
// Function to create the dynamic title string
const createTitleString = ({ regular, gradient }: IBanner['title']) => {
  const regular1 = regular?.[1] || '';
  const regular2 = regular?.[2] || '';
  const gradient1 = gradient?.[1] || '';
  const gradient2 = gradient?.[2] || '';

  return `${gradient1} ${regular1} ${gradient2} ${regular2}`.trim();
};

export const Banner = ({ banner }: BannerProps) => {
  const {
    imageUrl,
    title: { regular, gradient },
  } = banner;
  const parallaxAmount = 500;
  return (
    <div className="relative isolate z-0 py-[.8125rem] overflow-hidden">
      <div className="fb-container py-10 relative z-10 ">
        <h1
          data-swiper-parallax={parallaxAmount}
          className="max-w-[958px] mx-auto text-center text-brand-black-5 text-[clamp(1.75rem,5vw,2.5rem)] font-bold font-tti-bold leading-none xl:leading-tight"
        >
          {regular?.[1] ? <span className="capitalize">{regular[1]}</span> : ''}{' '}
          {gradient?.[1] ? (
            <span className="text-brand-primary-color-1/30 bg-clip-text bg-[linear-gradient(293deg,var(--tw-gradient-stops))] from-brand-primary-color-1 to-brand-primary-color-light animate-text-gradient">
              {gradient[1]}
            </span>
          ) : (
            ''
          )}{' '}
          <br className="hidden xl:block" />
          {gradient?.[2] ? (
            <span className="text-brand-primary-color-1/30 bg-clip-text bg-[linear-gradient(293deg,var(--tw-gradient-stops))] from-brand-primary-color-1 to-brand-primary-color-light animate-text-gradient">
              {gradient[2]}
            </span>
          ) : (
            ''
          )}{' '}
          {regular?.[2] ? <span className="">{regular[2]}</span> : ''}
        </h1>

        <div className="pt-20 text-center">
          <div
            className="inline-flex"
            data-swiper-parallax={parallaxAmount / 2}
          >
            <ReviewsWidget />
          </div>
        </div>
      </div>
      <figure className="absolute -z-10 w-64 xl:w-[22.5rem] aspect-square -right-28 top-1/4 blur-[6rem] rounded-circle bg-brand-yellow-550/10" />
      <figure className="absolute w-full h-full inset-0 flex justify-center items-center bg-brand-black-100/60 -z-20" />
      <figure className="absolute w-full h-full inset-0 flex justify-center items-center -z-30">
        <picture className="w-full h-full flex justify-center items-center">
          <img
            className="w-full h-full object-cover object-top"
            src={imageUrl}
            data-swiper-parallax={parallaxAmount + parallaxAmount}
            alt={createTitleString({ regular, gradient })}
            loading="eager"
            decoding="async"
            width={1920}
            height={480}
          />
        </picture>
      </figure>
    </div>
  );
};
