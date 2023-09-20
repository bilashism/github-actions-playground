import { TrustPilotIcon } from '../../components/icons/icons';

export const ReviewsWidget = () => {
  return (
    <div className="max-w-[412px] flex flex-col sm:flex-row gap-4 items-center justify-center">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-[2px]">
        <TrustPilotIcon className="w-6 h-6" />
        <span className="pt-[3px] text-xl xl:text-2xl leading-none font-medium font-tti-medium">
          Trustpilot
        </span>
      </div>
      <div className="flex flex-col gap-2 text-brand-black-20 text-center sm:text-start">
        <p className="font-tti-medium text-base leading-none font-medium">
          Excellent 5.0 out of 5.0
        </p>
        <p className="font-oxanium font-normal text-sm leading-none ">
          Based on thousands of reviews
        </p>
      </div>
    </div>
  );
};
