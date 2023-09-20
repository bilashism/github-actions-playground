import { CurrencySymbol } from '../../../components/ui/CurrencySymbol';
import { GradientBordered } from '../../../components/ui/GradientBordered';
import { Money } from '../../../components/ui/Money';

import { TransactionsSummary } from './TransactionsSummary';

export const WalletOverviewTabContent = () => {
  return (
    <div className="grid gap-6 xl:gap-8 px-2">
      <GradientBordered className="rounded-[1.25rem] before:rounded-[1.25rem] before:bg-gradient-bordered-deep max-w-md mx-auto grid gap-10 pb-14">
        <div className="w-full bg-brand-primary-color-1/10 px-4 py-5 rounded-b-[1.25rem] flex gap-2 items-start justify-center">
          <picture className="inline-flex justify-center items-center">
            <source media="(min-width: 350px)" srcSet="/favicon.svg" />
            <img
              src="/favicon.svg"
              alt="description"
              className="inline-flex w-8 h-9"
              loading="lazy"
              width="32"
              height="36"
              decoding="async"
              // fetchPriority="low"
            />
          </picture>
          <h2 className="font-tti-bold font-bold text-[clamp(1.5rem,4vw,2.8125rem)] leading-none text-white">
            Balance
          </h2>
        </div>
        <GradientBordered className="px-4 py-3 rounded-[.625rem] before:rounded-[.625rem] before:bg-gradient-bordered-deep bg-brand-primary-color-1/[.03] max-w-[theme(width.72)] mx-auto text-center">
          <span className="text-white text-[clamp(1.15rem,4vw,2.25rem)] leading-none font-semibold font-oxanium">
            <CurrencySymbol className="inline-flex justify-center w-3" />
            <Money value={10} />
          </span>
        </GradientBordered>
      </GradientBordered>

      <h2 className="text-brand-primary-color-light text-base font-medium leading-none text-center">
        Transactions summary
      </h2>
      <div className="w-full max-w-6xl mx-auto">
        <TransactionsSummary />
      </div>
    </div>
  );
};
