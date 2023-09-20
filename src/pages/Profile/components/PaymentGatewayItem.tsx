import { HTMLProps } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { PaymentMethod } from './WalletDepositTabContent';

type Props = {
  gateway: PaymentMethod;
  register?: UseFormRegisterReturn;
} & Omit<HTMLProps<HTMLInputElement>, 'ref' | 'type' | 'id'>;

export const PaymentGatewayItem = ({
  gateway: { id, name, logo },
  register,
  ...attributes
}: Props) => {
  return (
    <div className="relative isolate z-0 p-1 overflow-clip w-full max-w-[theme(width.72)] mx-auto">
      <input
        type="radio"
        id={id}
        value={name}
        className="sr-only peer"
        {...register}
        {...attributes}
      />
      <label
        htmlFor={id}
        className="grid w-full overflow-clip justify-center text-center gap-1 xl:gap-2 border border-transparent bg-brand-primary-color-1/[.03] rounded-xl peer-checked:border-brand-primary-color-1 peer-checked:shadow peer-checked:[--tw-shadow-colored:0_0_4px_var(--tw-shadow-color)] peer-checked:shadow-brand-primary-color-1/80 transition-all cursor-pointer py-4"
      >
        <picture className="inline-flex justify-center items-center max-w-[theme(width.48)] h-10">
          <source media="(min-width: 350px)" srcSet={logo} />
          <img
            src={logo}
            alt="description"
            className="h-full object-contain"
            loading="lazy"
            width="190"
            height="40"
            decoding="async"
            // fetchPriority="low"
          />
        </picture>
        <span className="first-letter:uppercase text-brand-black-20 text-sm xl:text-base leading-none font-oxanium">
          {name}
        </span>
      </label>
    </div>
  );
};

PaymentGatewayItem.defaultProps = {
  register: undefined,
};
