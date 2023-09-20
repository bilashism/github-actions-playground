import { ReactNode } from 'react';

import { GradientBordered } from '../../../components/ui/GradientBordered';

type OrderDetailsMetaInfoProps = {
  label: string;
  value: string | ReactNode;
};

export const OrderDetailsMetaInfo = ({
  label,
  value,
}: OrderDetailsMetaInfoProps) => {
  return (
    <div className="grow flex flex-col gap-4 font-oxanium text-sm xl:text-base leading-none font-normal">
      <p className="capitalize text-brand-black-10">{label}</p>
      <GradientBordered className="p-4 rounded-[.625rem] before:rounded-[.625rem] before:bg-gradient-bordered-deep bg-brand-primary-color-1/[.03]">
        <span className="text-brand-black-5">{value}</span>
      </GradientBordered>
    </div>
  );
};
