import cartItemImage from '../../assets/images/cart-item-image.png';
import { TrashIcon } from '../icons/icons';

import { CurrencySymbol } from './CurrencySymbol';
import { Money } from './Money';

export const ShoppingCartItem = () => {
  return (
    <div className="relative isolate flex flex-col p-2 xl:p-3 gap-1 xl:gap-2 z-0 border rounded border-black bg-fading-theme-gradient-top-to-bottom text-[clamp(.75rem,3vw,.875rem)]">
      <div className="flex justify-between items-center gap-1 xl:gap-3">
        <figure className="max-w-[100px] flex-shrink-0">
          <picture className="">
            <source media="(min-width: 150px)" srcSet={cartItemImage} />
            <img
              src={cartItemImage}
              alt="description"
              className="object-contain"
              loading="lazy"
              width="147"
              height="72"
              decoding="async"
            />
          </picture>
        </figure>
        <h3 className="leading-tight text-[clamp(.75rem,3vw,1.125rem)] font-normal font-zen-dots text-white flex-grow">
          Diablo4 - EU Gold
        </h3>
      </div>
      <div className="flex flex-nowrap justify-between items-start gap-2 xl:gap-4">
        <div className="font-tti-regular leading-normal font-normal flex-shrink-0 flex-grow">
          <p className="text-brand-primary-color-1/30 bg-clip-text bg-[linear-gradient(293deg,var(--tw-gradient-stops))]  from-brand-primary-color-1 to-brand-primary-color-light">
            {' '}
            Currency - EU - Horde - Kazzak{' '}
          </p>
          <p className="flex flex-wrap items-center gap-1">
            <span className="text-brand-primary-color-1/30 bg-clip-text bg-[linear-gradient(293deg,var(--tw-gradient-stops))]  from-brand-primary-color-1 to-brand-primary-color-light">
              Sold by:
            </span>{' '}
            FullBoostsSales
          </p>
          <p className="flex flex-wrap items-center gap-1">
            <span className="text-brand-primary-color-1/30 bg-clip-text bg-[linear-gradient(293deg,var(--tw-gradient-stops))]  from-brand-primary-color-1 to-brand-primary-color-light">
              Delivery time:
            </span>{' '}
            15 minutes
          </p>
          <p className="flex flex-wrap items-center gap-1">
            <span className="text-brand-primary-color-1/30 bg-clip-text bg-[linear-gradient(293deg,var(--tw-gradient-stops))]  from-brand-primary-color-1 to-brand-primary-color-light">
              Quantity:
            </span>{' '}
            300,000
          </p>
        </div>
        <div className="flex flex-wrap justify-end gap-2 xl:gap-4 pr-2 xl:pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-12 fill-none"
            viewBox="0 0 10 46"
          >
            <path
              className="opacity-20"
              d="M1.09839 1L8.97274 45.6654"
              stroke="url(#shopping-cart-item-bar-gradient)"
            />
            <defs>
              <linearGradient
                id="shopping-cart-item-bar-gradient"
                x1="0.286544"
                y1="-48.0189"
                x2="15.7369"
                y2="-46.6046"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EBDDD0" />
                <stop offset="1" stopColor="#F16334" />
              </linearGradient>
            </defs>
          </svg>
          <p className="flex flex-col justify-center items-center text-center gap-3">
            <span className="text-brand-primary-color-1/30 bg-clip-text bg-[linear-gradient(293deg,var(--tw-gradient-stops))] from-brand-primary-color-1 to-brand-primary-color-light leading-none font-normal font-oxanium capitalize">
              price
            </span>
            <span className="font-oxanium font-semibold leading-normal">
              <CurrencySymbol className="inline-flex justify-center w-3" />
              <Money value={10.95} />
            </span>
          </p>
          <div className="flex flex-grow w-full justify-end">
            <button
              type="button"
              className="inline-flex items-end gap-1 font-tti-medium font-medium text-brand-black-30 hover:text-white transition-colors outline-none leading-none"
            >
              <TrashIcon /> <span className="">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
