import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { GradientDirectionArrow } from '../../components/icons/icons';
import { LatestOffersCategorySlider } from '../../components/ui/LatestOffersCategorySlider';
import { LatestOffersDisplay } from '../../components/ui/LatestOffersDisplay';
import { GameOffer, OfferCard } from '../../components/ui/OfferCard';
import { ShowLatestOfferGames } from '../../components/ui/ShowLatestOfferGames';

export const LatestGamesOffers = () => {
  const [gameOffers, setGameOffers] = useState<GameOffer[]>();

  useEffect(() => {
    if (gameOffers?.length === undefined || gameOffers?.length === 0) {
      fetch('./data/latestOffers.json')
        .then((res) => res.json())
        .then((data: GameOffer[]) => {
          // console.log(data);
          setGameOffers(data);
        })
        .catch(console.error);
    }
  }, [gameOffers?.length]);

  return (
    <section className="pt-20 pb-28 bg-[linear-gradient(180deg,var(--tw-gradient-stops))]  from-brand-black-130/40 to-brand-primary-color-2/0 relative isolate z-0 overflow-hidden">
      <div className="fb-container">
        <div className="flex flex-col  gap-9 xl:gap-20">
          <h2 className="text-center font-bold font-tti-bold text-[clamp(1.5rem,4vw,2.5rem)] leading-tight capitalize text-brand-primary-color-1/30 bg-clip-text bg-[linear-gradient(293deg,var(--tw-gradient-stops))]  from-brand-primary-color-1 to-brand-primary-color-light animate-text-gradient">
            Latest Games Offers
          </h2>

          <div className="flex flex-col xl:flex-row gap-8">
            <div className="w-full xl:max-w-[16.875rem] xl:flex-shrink-0">
              <ShowLatestOfferGames />
            </div>
            <div className="flex flex-col gap-6 w-full xl:max-w-[calc(100%-(16.875rem+2rem))]">
              <div className="flex flex-wrap gap-8 ">
                <h2 className="font-tti-demi-bold font-semibold text-2xl text-white leading-none">
                  WotLK Classic Offers
                </h2>
                <Link
                  to="/"
                  className="inline-flex justify-center items-center gap-2 text-base leading-none text-brand-black-5 font-oxanium font-normal hover:underline hover:text-brand-primary-color-1 transition-colors"
                >
                  <span className="">Discover more offers</span>
                  <GradientDirectionArrow />
                </Link>
              </div>
              <div className="">
                <LatestOffersCategorySlider />
              </div>
              <div className="">
                <LatestOffersDisplay />
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 ">
                {gameOffers?.map((offer) => (
                  <OfferCard key={offer.id} card={offer} />
                ))}
              </div>
              <div className="text-center">
                <Link
                  to="/"
                  className="relative isolate rounded-md overflow-hidden bg-brand-primary-color-1/[0.03] gradient-bordered before:p-px before:rounded-md before:bg-[linear-gradient(91.55deg,rgba(235,221,208,.25),rgba(241,101,52,.75))] inline-flex w-full h-full flex-row justify-center items-center gap-2 px-4 xl:px-5 py-4 xl:py-7 font-oxanium font-medium text-base leading-none text-brand-primary-color-1 hover:text-brand-primary-color-light transition-colors"
                >
                  Discover more offers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figure className="absolute -z-10 w-[50rem] h-[75rem] -left-80 top-[20%] -rotate-12 blur-lg rounded-circle  bg-[radial-gradient(50.26%_50.56%_at_49.58%_49.98%,rgba(241,99,52,0.15)_0%,rgba(129,55,30,0.08)_42%,rgba(11,18,23,0)_100%)]" />
      <figure className="absolute -z-10 w-[28rem] aspect-square left-1/2 top-1/2 blur-[6rem] rounded-circle bg-brand-purple-550/5" />
    </section>
  );
};
