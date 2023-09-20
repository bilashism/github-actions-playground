import { CurrencySymbol } from './CurrencySymbol';
import { Money } from './Money';
import { ShoppingCartItem } from './ShoppingCartItem';

export const ShoppingCart = () => {
  return (
    <div className="flex flex-col gap-3 h-full">
      {/* <div className="">
        <Link to="/" className="inline-flex justify-center items-center">
          <img
            className="w-22 xl:w-44 h-4 xl:h-8 "
            alt="logo"
            src={logoImgSrc}
          />
        </Link>
      </div> */}
      <h2 className="flex justify-start items-center gap-2 xl:gap-3">
        <span className="text-[clamp(1rem,3vw,1.125rem)] leading-tight font-bold font-tti-bold text-white">
          Shopping Cart
        </span>
        <span className="text-xs xl:text-[15px] font-tti-medium font-medium text-brand-black-30">
          (4 items)
        </span>
      </h2>
      <hr className="rounded border border-brand-black-90" />
      <div className="flex flex-col gap-3 xl:gap-3 overflow-auto min-h-[6rem] h-[calc(100vh-43.5rem)] flex-grow minimal-scrollbar px-1 xl:px-2">
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
      </div>
      <hr className="rounded border border-brand-black-90" />
      <p className="flex items-center justify-between gap-4 font-tti-bold font-bold text-[clamp(1rem,3vw,1.125rem)] leading-tight">
        <span className="">Item(s)</span>{' '}
        <span className="">
          <CurrencySymbol className="inline-flex justify-center w-3" />
          <Money value={11.86} />
        </span>
      </p>
      <hr className="rounded border border-brand-black-90" />
      <p className="flex items-center justify-between gap-4 font-tti-bold font-bold text-[clamp(1rem,3vw,1.125rem)] leading-tight">
        <span className="">Apply promo code</span>{' '}
        <button type="button" className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-5"
            viewBox="0 0 30 28"
            fill="none"
          >
            <path
              d="M28.3333 15.0492H1.66667C0.755556 15.0492 0 14.367 0 13.5443C0 12.7216 0.755556 12.0393 1.66667 12.0393H28.3333C29.2444 12.0393 30 12.7216 30 13.5443C30 14.367 29.2444 15.0492 28.3333 15.0492Z"
              fill="white"
            />
            <path
              d="M15 27.0885C14.0889 27.0885 13.3334 26.4063 13.3334 25.5836V1.50492C13.3334 0.68223 14.0889 0 15 0C15.9112 0 16.6667 0.68223 16.6667 1.50492V25.5836C16.6667 26.4063 15.9112 27.0885 15 27.0885Z"
              fill="white"
            />
          </svg>
        </button>
      </p>
      <hr className="rounded border border-brand-black-90" />
      <p className="flex items-center justify-between gap-4 font-tti-bold font-bold text-[clamp(1rem,3vw,1.125rem)] leading-tight">
        <span className="">Subtotal</span>{' '}
        <span className="">
          <CurrencySymbol className="inline-flex justify-center w-3" />
          <Money value={12.86} />
        </span>
      </p>
      <div className="pb-2">
        <button
          type="button"
          className='flex mx-auto h-full justify-center items-center px-4 xl:px-6 py-2 text-base xl:text-lg leading-tight rounded-md font-semibold font-oxanium text-white bg-fading-theme-gradient-light-to-deep hover:bg-[linear-gradient(theme("colors.brand.primary.color-1")_100%,theme("colors.brand.primary.color-1")_100%)] transition-all'
        >
          Secure checkout
        </button>
      </div>
    </div>
  );
};
