import { ChangeEventHandler } from 'react';

import paypalLogo from '../../../assets/images/paypal-sm.svg';
import { Dropdown } from '../../../components/ui/Dropdown';
import { InputToggleBox } from '../../OffersSingle/components/OfferFilterInputBox';

import { TransactionItem, TransactionType } from './TransactionItem';

export const TransactionsData: TransactionType[] = [
  {
    id: '1',
    uid: 'product-a',
    title: 'Product A',
    subtitle: 'corrupti nemo fugit',
    date: '2023-07-01',
    flow: 'down',
    reviewCount: 10,
    rating: 4.5,
    status: 'placed',
    price: 50,
  },
  {
    id: '2',
    uid: 'product-b',
    title: 'Product B',
    subtitle: 'est fugit harum',
    date: '2023-07-02',
    flow: 'down',

    reviewCount: 5,
    rating: 3.8,
    status: 'processing',
    price: 30,
  },
  {
    id: '3',
    uid: 'product-c',
    title: 'Product C',
    subtitle: 'provident at voluptatem',
    date: '2023-07-03',
    flow: 'up',

    reviewCount: 20,
    rating: 4.9,
    status: 'confirmed',
    price: 75,
  },
  {
    id: '4',
    uid: 'product-d',
    title: 'withdrawal',
    // subtitle: 'architecto repellendus enim',
    date: '2023-07-04',
    flow: 'down',
    paymentProvider: {
      name: 'paypal',
      logo: paypalLogo,
    },
    reviewCount: 8,
    rating: 4.0,
    status: 'completed',
    price: 45,
  },
  {
    id: '5',
    uid: 'product-e',
    title: 'Product E',
    subtitle: 'quo blanditiis id',
    date: '2023-07-05',
    flow: 'up',

    reviewCount: 15,
    rating: 4.7,
    status: 'placed',
    price: 60,
  },
];

export const Transactions = () => {
  const sortOptions = [
    'Chief Data Manager',
    'Legacy Configuration Planner',
    'Product Group Consultant',
    'Direct Integration Architect',
    'Lead Quality Technician',
    'Customer Accounts Officer',
    'Direct Accountability Agent',
    'Dynamic Web Administrator',
  ];
  const handleSortSelect = (value: string) => {
    console.log(`Selected option: ${value}`);
  };

  const handleShowIncompleteTransactionFilter: ChangeEventHandler<
    HTMLInputElement
  > = (ev) => {
    console.log(ev.target.checked);
  };

  return (
    <div className="flex flex-col gap-8 pt-6">
      <div className="grid gap-4 px-4 xl:px-10">
        <InputToggleBox
          type="checkbox"
          label="Show incomplete transactions"
          onChange={handleShowIncompleteTransactionFilter}
        />
        {/* sort dropdown  */}
        <div className="w-full max-w-xs">
          <Dropdown
            className="bg-brand-primary-color-1/[.03]"
            defaultLabel="any type"
            selectHandler={handleSortSelect}
            options={sortOptions}
          />
        </div>
      </div>
      <div className="grid gap-4 xl:gap-8 h-full max-h-96 minimal-scrollbar overflow-auto px-4 xl:px-6">
        {TransactionsData?.map((transaction) => (
          <TransactionItem key={transaction?.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};
