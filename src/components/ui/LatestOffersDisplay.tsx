import displayImageSrc from '../../assets/images/display-image.png';

export const LatestOffersDisplay = () => {
  return (
    <div className="relative isolate z-0 overflow-hidden rounded-md py-7 px-8 ">
      <div className="relative z-10 w-full h-full ">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="flex justify-start items-start flex-col gap-4">
            <h2 className="text-white font-tti-demi-bold font-semibold text-xl leading-none">
              Enjoy Dragonflight Season 2!
            </h2>
            <p className="text-brand-black-10 font-oxanium font-normal text-base leading-none">
              Order Aberrus raid runs, Mythic+ dungeons, and PvP activities!
            </p>
          </div>
          {/* <button
            type="button"
            className="capitalize self-end md:self-start font-tti-medium font-medium text-base leading-none text-brand-black-30 xl:pr-8 hover:text-brand-black-20 transition-colors"
          >
            remove
          </button> */}
        </div>
      </div>
      <figure className="absolute inset-0 -z-10 bg-black/5 bg-[linear-gradient(90deg,rgba(241,102,52,0.70)_40%,rgba(0,0,0,0)_100%)]" />
      <figure className="absolute inset-0 -z-20 flex items-center justify-end">
        <picture className="w-full h-full flex justify-center items-center">
          <source media="(min-width: 350px)" srcSet={displayImageSrc} />
          <img
            src={displayImageSrc}
            alt="description"
            className="object-cover w-full h-full"
            loading="lazy"
            width="1018"
            height="108"
            decoding="async"
            // fetchPriority="low"
          />
        </picture>
      </figure>
    </div>
  );
};
