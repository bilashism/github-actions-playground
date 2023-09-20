import { Link } from 'react-router-dom';

import { ROUTE_PARAM, ROUTER_PATH } from '../../../enums/router-path';

export type FeaturedGuideCard = {
  uid: string;
  id: string;
  title: string;
  shortDescription: string;
  author: string;
  publishDate: string;
  imageUrl: string;
};
export type FeaturedGuideCardProps = {
  card: FeaturedGuideCard;
};
export const FeaturedGuideCard = ({ card }: FeaturedGuideCardProps) => {
  const { id, uid, author, imageUrl, publishDate, shortDescription, title } =
    card;
  return (
    <div className="relative isolate z-0 rounded-[.625rem] gradient-bordered before:p-px before:rounded-[.625rem] before:bg-gradient-bordered-deep px-4 pt-4 pb-6 flex flex-col gap-8 bg-[linear-gradient(137deg,rgba(250,167,64,0.20)_0%,rgba(255,255,255,0)_47.40%,rgba(241,104,52,0.20)_100%)] overflow-hidden max-w-md">
      <figure className="relative isolate z-0 overflow-hidden rounded-[.625rem] ">
        <Link to={ROUTER_PATH.GUIDES_SINGLE.replace(ROUTE_PARAM.UID, uid)}>
          <picture className="">
            <source media="(min-width: 350px)" srcSet={imageUrl} />
            <img
              src={imageUrl}
              alt={title}
              className="p-px rounded-[.625rem] w-full object-cover hover:scale-105 transition-transform"
              loading="lazy"
              width="390"
              height="312"
              decoding="async"
              // fetchPriority="low"
            />
          </picture>
        </Link>
      </figure>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold self-start font-tti-demi-bold text-[clamp(1rem,3vw,1.5rem)] leading-none capitalize text-brand-primary-color-1/30 bg-clip-text bg-[linear-gradient(293deg,var(--tw-gradient-stops))] from-brand-primary-color-1 to-brand-primary-color-light hover:text-brand-primary-color-light transition-colors">
            <Link to={ROUTER_PATH.GUIDES_SINGLE.replace(ROUTE_PARAM.UID, uid)}>
              {title}
            </Link>
          </h3>
          <p className="">
            {shortDescription}{' '}
            <Link
              to={ROUTER_PATH.GUIDES_SINGLE.replace(ROUTE_PARAM.UID, uid)}
              className="bg-clip-text text-brand-yellow-550/10 inline-flex justify-center items-center capitalize gap-1 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] to-brand-primary-color-1 from-brand-yellow-550 hover:underline hover:underline-offset-4"
            >
              read more {'>'}
            </Link>
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-between">
          <p className="flex flex-col gap-2">
            <span className="text-brand-primary-color-1 text-sm leading-none font-normal font-oxanium">
              Author
            </span>
            <span className="text-white text-base leading-none font-normal font-oxanium">
              By <span className="">{author}</span>
            </span>
          </p>
          <p className="flex flex-col gap-2">
            <span className="text-brand-primary-color-1 text-sm leading-none font-normal font-oxanium">
              Publish Date
            </span>
            <span className="text-white text-base leading-none font-normal font-oxanium">
              {publishDate}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
