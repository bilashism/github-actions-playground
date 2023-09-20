import { IoMdStarOutline } from 'react-icons/io';
import { Outlet } from 'react-router-dom';

import {
  OrderIcon,
  PartnerLevelBadgeIcon,
} from '../../../components/icons/icons';
import { CurrencySymbol } from '../../../components/ui/CurrencySymbol';
import { Money } from '../../../components/ui/Money';

import {
  PartnerMetaInfo,
  TPartnerMetaInfo,
} from './components/PartnerMetaInfo';

export const PARTNER_META_INFOS: ReadonlyArray<TPartnerMetaInfo> = [
  {
    label: 'Total Earnings',
    icon: <OrderIcon className="w-10 h-10 stroke-brand-primary-color-1" />,
    children: (
      <>
        <CurrencySymbol />
        <Money value={250} />
      </>
    ),
  },
  {
    label: 'Level',
    icon: (
      <PartnerLevelBadgeIcon className="w-10 h-10 stroke-brand-primary-color-1" />
    ),
    children: 4,
  },
  {
    label: 'rating',
    icon: <IoMdStarOutline className="w-10 h-10 text-brand-primary-color-1" />,
    children: 4.8,
  },
];

export const Partner = () => {
  return (
    <div className="p-4 xl:p-4 xl:pl-0 h-[inherit] overflow-auto flex flex-col gap-8 minimal-scrollbar">
      <div className="">
        <div className="w-full flex flex-col md:flex-row xl:grid-cols-3 gap-4 xl:gap-8">
          {PARTNER_META_INFOS?.map((data) => (
            <PartnerMetaInfo
              key={crypto.randomUUID().toString()}
              payload={data}
            />
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};
