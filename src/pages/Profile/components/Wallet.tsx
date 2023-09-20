import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { lazilyLoadable } from '../../../utils/lazilyLoadable';

const { WalletOverviewTabContent } = lazilyLoadable(
  () => import('./WalletOverviewTabContent')
);
const { WalletDepositTabContent } = lazilyLoadable(
  () => import('./WalletDepositTabContent')
);
const { WalletWithdrawalTabContent } = lazilyLoadable(
  () => import('./WalletWithdrawalTabContent')
);

export const Wallet = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <div className="">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="relative isolate z-0 flex justify-between items-center gap-2 font-oxanium text-lg xl:text-2xl leading-none font-medium max-w-sm mx-auto px-2 py-8 xl:py-12">
            {['Overview', 'Deposit', 'Withdrawal'].map((label, idx) => (
              <Tab
                key={`wallet-tab-${idx + 1}`}
                className="relative isolate z-0 outline-none py-1 line-clamp-1 inline-flex justify-center text-center xl:min-w-[7rem] text-white aria-selected:text-brand-primary-color-1 aria-selected:underline aria-selected:underline-offset-4 transition-all cursor-pointer hover:text-brand-primary-color-light select-none capitalize"
              >
                {label}
              </Tab>
            ))}
          </TabList>

          {/* Overview */}
          <TabPanel>
            {tabIndex === 0 ? <WalletOverviewTabContent /> : false}
          </TabPanel>

          {/* Deposit */}
          <TabPanel>
            {tabIndex === 1 ? <WalletDepositTabContent /> : false}
          </TabPanel>

          {/* Withdrawal */}
          <TabPanel>
            {tabIndex === 2 ? <WalletWithdrawalTabContent /> : false}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
