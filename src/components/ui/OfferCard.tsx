import { Link } from 'react-router-dom';

import { ROUTE_PARAM, ROUTER_PATH } from '../../enums/router-path';

import { CurrencySymbol } from './CurrencySymbol';
import { Money } from './Money';
import { OfferLabel } from './OfferLabel';

export type GameOffer = {
  gameUid: string;
  id: string;
  category: string;
  uid: string;
  name: string;
  price: number;
  discount: number;
  label: string;
  imageUrl: string;
  description: string;
  bulletPoints: string[];
};

export type IOfferCardProps = {
  card: GameOffer;
};
export const OfferCard = (props: IOfferCardProps) => {
  const {
    gameUid,
    category,
    id,
    uid,
    imageUrl,
    bulletPoints,
    name,
    price,
    discount,
    description,
    label,
  } = props.card;

  return (
    <div className="p-4 max-w-sm w-full mx-auto flex flex-col gap-4 bg-brand-primary-color-1/[0.05] rounded-lg group">
      <figure className="grid relative isolate z-0 top-left-sharp-cut rounded-md overflow-hidden pb-2 rounded-b-xl after:absolute after:-z-10 after:w-full after:mx-auto after:h-3 after:bottom-0 after:left-0 after:bg-brand-primary-color-1 group-hover:after:bg-transparent after:transition-colors">
        <Link
          to={ROUTER_PATH.OFFERS_SINGLE.replace(
            ROUTE_PARAM.UID,
            gameUid
          ).replace(ROUTE_PARAM.UID, uid)}
          className="row-span-full col-span-full"
        >
          <picture className="">
            <source media="(min-width: 350px)" srcSet={imageUrl} />
            <img
              src={imageUrl}
              alt="description"
              className="rounded-b-md w-full h-full object-cover object-center group-hover:scale-110 group-hover:rounded-none transition-transform"
              loading="lazy"
              width="291"
              height="300"
              decoding="async"
              // fetchPriority="low"
            />
          </picture>
        </Link>
        <OfferLabel
          label={label}
          className="row-span-full col-span-full justify-self-end mt-4 mr-4"
        />
      </figure>
      <div className='overflow-hidden rounded-lg bg-[linear-gradient(180deg,theme("colors.brand.primary.color-1"/0.08)_0%,theme("colors.brand.primary.color-1"/0)_100%)] '>
        <div className="flex flex-col gap-4 px-4 py-3 border-x border-x-brand-primary-color-1">
          <h2 className="font-tti-demi-bold font-semibold text-lg leading-none text-white">
            <Link
              to={ROUTER_PATH.OFFERS_SINGLE.replace(
                ROUTE_PARAM.UID,
                gameUid
              ).replace(ROUTE_PARAM.UID, uid)}
              className="block hover:text-brand-primary-color-1 transition-colors"
            >
              {name}
            </Link>
          </h2>
          <ul className="flex flex-col gap-2">
            {bulletPoints.map((point, idx) => (
              <li
                key={`point-${idx + 1}`}
                className="flex gap-2 items-center justify-start"
              >
                <svg
                  className="w-[.375rem] h-[.375rem] shrink-0"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2.82843"
                    y="0.171631"
                    width="4"
                    height="4"
                    transform="rotate(45 2.82843 0.171631)"
                    fill="#F16334"
                  />
                </svg>
                <span className="line-clamp-1 font-oxanium text-brand-black-20 text-xs leading-none font-normal">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-4 pt-3 flex flex-col gap-1">
          <p className="text-brand-black-30 font-oxanium font-medium text-xs leading-none">
            From
          </p>
          <p className="flex flex-wrap gap-1">
            {discount ? (
              <>
                <span className="font-oxanium text-base leading-none font-semibold text-brand-primary-color-1">
                  <CurrencySymbol /> <Money value={price - discount} />
                </span>
                <sub className="line-through font-oxanium text-xs leading-none font-semibold text-brand-primary-color-light">
                  <CurrencySymbol /> <Money value={price} />
                </sub>
              </>
            ) : (
              <span className="font-oxanium text-base leading-none font-semibold text-brand-primary-color-1">
                <CurrencySymbol /> <Money value={price} />
              </span>
            )}
          </p>
        </div>
      </div>
      <div className="h-px w-full bg-fading-theme-gradient-25 " />
    </div>
  );
};
