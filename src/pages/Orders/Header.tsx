import React from 'react';
import { IoIosSearch } from 'react-icons/io';

import { Dropdown } from '../../components/ui/Dropdown';

export const Header = () => {
  const gameOptions = [
    'Chief Data Manager',
    'Legacy Configuration Planner',
    'Product Group Consultant',
    'Direct Integration Architect',
    'Lead Quality Technician',
    'Customer Accounts Officer',
    'Direct Accountability Agent',
    'Dynamic Web Administrator',
  ];
  const handleGameSelect = (value: string) => {
    console.log(`Selected game: ${value}`);
  };

  const stateOptions = [...gameOptions];
  const handleStateSelect = (value: string) => {
    console.log(`Selected state: ${value}`);
  };

  const statusOptions = ['pending', 'rejected', 'fulfilled'];
  const handleStatusSelect = (value: string) => {
    console.log(`Selected state: ${value}`);
  };

  const sortOptions = ['Created AI', 'Price', 'Duration'];
  const handleSortSelect = (value: string) => {
    console.log(`Selected sort: ${value}`);
  };

  return (
    <header className="py-10 xl:pt-24 relative isolate z-50 ">
      <div className="fb-container">
        <h2 className="capitalize text-center font-bold font-tti-bold text-[clamp(1.85rem,5vw,3rem)] leading-tight">
          My{' '}
          <span className="inline-flex text-brand-primary-color-1/30 bg-clip-text bg-[linear-gradient(293deg,var(--tw-gradient-stops))] from-brand-primary-color-1 to-brand-primary-color-light animate-text-gradient">
            Orders
          </span>
        </h2>
        <div className="flex flex-col items-center gap-5 xl:gap-10 py-7">
          <div className="flex flex-wrap items-center justify-center gap-5 xl:gap-10">
            {/* games dropdown  */}
            <div className="w-56 max-w-full">
              <Dropdown
                heightClassName="h-50"
                leftIcon={<IoIosSearch className="w-5 h-5 shrink-0" />}
                defaultLabel="game"
                selectHandler={handleGameSelect}
                options={gameOptions}
              />
            </div>
            {/* state dropdown  */}
            <div className="w-56 max-w-full">
              <Dropdown
                heightClassName="h-40"
                leftIcon={<IoIosSearch className="w-5 h-5 shrink-0" />}
                defaultLabel="state"
                selectHandler={handleStateSelect}
                options={stateOptions}
              />
            </div>
            {/* status dropdown  */}
            <div className="w-56 max-w-full">
              <Dropdown
                // heightClassName="h-40"
                leftIcon={<IoIosSearch className="w-5 h-5 shrink-0" />}
                defaultLabel="status"
                selectHandler={handleStatusSelect}
                options={statusOptions}
              />
            </div>
          </div>
          <div className="xl:w-full flex flex-wrap items-center justify-end gap-5 xl:gap-10">
            {/* sort dropdown  */}
            <div className="w-56 xl:w-40 max-w-full">
              <Dropdown
                defaultLabel="sort by"
                selectHandler={handleSortSelect}
                options={sortOptions}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
