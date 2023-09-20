import { ReviewsWidgetStars } from './components/ReviewsWidgetStars';
import { useSingleOfferContext } from '.';

export const Header = () => {
  const { gameOffer } = useSingleOfferContext();

  return (
    <header className="relative isolate z-0 overflow-clip py-10 xl:py-40">
      <div className="fb-container grid gap-4">
        <h2 className="capitalize font-bold font-tti-bold text-[clamp(1.85rem,5vw,3rem)] leading-tight">
          <span className="flex justify-center text-center text-brand-primary-color-1/30 bg-clip-text bg-[linear-gradient(293deg,var(--tw-gradient-stops))] from-brand-primary-color-1 to-brand-primary-color-light animate-text-gradient">
            {gameOffer?.gameUid} {gameOffer?.category} {gameOffer?.name}
          </span>
        </h2>
        <ReviewsWidgetStars />
      </div>
    </header>
  );
};
