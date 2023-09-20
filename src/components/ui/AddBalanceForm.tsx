import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { GradientBorderedInput } from '../../pages/Profile/components/GradientBorderedInput';
import { useAppDispatch } from '../../redux/hooks';

import { CurrencySymbol } from './CurrencySymbol';

type SignInFormInputs = {
  amount: string;
};

export const AddBalanceForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<SignInFormInputs>();

  const onSubmit: SubmitHandler<SignInFormInputs> = ({ amount }) => {
    console.log(amount);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 font-oxanium"
    >
      <GradientBorderedInput
        label="Amount"
        placeholder="0"
        type="number"
        errors={errors}
        icon={<CurrencySymbol className="inline-flex pl-4" />}
        register={register('amount', {
          required: 'Balance amount is required',
          min: {
            value: 1,
            message: 'Minimum amount needs to be at least 1 USD or EUR',
          },
        })}
      />
      <div className="">
        <button
          type="submit"
          className='flex mx-auto h-full justify-center items-center px-4 xl:px-6 py-2 text-base xl:text-lg leading-tight rounded-md font-semibold font-oxanium text-white bg-fading-theme-gradient-light-to-deep hover:bg-[linear-gradient(theme("colors.brand.primary.color-1")_100%,theme("colors.brand.primary.color-1")_100%)] transition-all'
        >
          Go to payment page
        </button>
      </div>
    </form>
  );
};
