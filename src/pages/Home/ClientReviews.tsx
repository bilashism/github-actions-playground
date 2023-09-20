import { ReviewsSlider } from './ReviewsSlider';
import { ReviewsWidget } from './ReviewsWidget';

export const ClientReviews = () => {
  return (
    <section className="py-16 relative isolate z-0 overflow-hidden">
      <div className="fb-container">
        <div className="flex flex-col gap-16">
          <div className="flex flex-wrap gap-4 justify-center xl:justify-between items-center">
            <h2 className="text-white font-bold font-tti-bold text-[clamp(1.5rem,4vw,2.5rem)] leading-tight capitalize">
              our{' '}
              <span className="text-brand-primary-color-1/30 bg-clip-text bg-[linear-gradient(293deg,var(--tw-gradient-stops))] from-brand-primary-color-1 to-brand-primary-color-light animate-text-gradient">
                client reviews
              </span>
            </h2>
            <div className="w-full xl:w-auto flex justify-center">
              <ReviewsWidget />
            </div>
          </div>
          <div className="">
            <ReviewsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};
