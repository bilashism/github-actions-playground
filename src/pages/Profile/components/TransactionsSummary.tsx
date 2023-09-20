import { ORDERS_DATA } from '../../Orders/Main';

import { TransactionSummaryItem } from './TransactionSummaryItem';

export const TransactionsSummary = () => {
  return (
    <div className="rounded-xl border border-brand-primary-color-1 p-4 xl:p-8">
      <div className="grid gap-4 h-full max-h-96 minimal-scrollbar overflow-auto px-1">
        {ORDERS_DATA?.map((summary) => (
          <TransactionSummaryItem key={summary?.id} summary={summary} />
        ))}
      </div>
    </div>
  );
};
