import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import { CurrencySymbol } from '../../../components/ui/CurrencySymbol';
import { ShowInputError } from '../../../components/ui/ShowInputError';
import { validateNoSpecialChars } from '../../RateOrder/Main';

import { GradientBorderedInput } from './GradientBorderedInput';
import { PaymentGatewayItem } from './PaymentGatewayItem';
import { paymentMethods } from './WalletDepositTabContent';

type WalletDepositFormInputs = {
  method: string;
  amount: number;
  card: {
    holder: string;
    number: number;
    expireDate: Date;
    cvv: number;
  };
};

export const WalletWithdrawalTabContent = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<WalletDepositFormInputs>();

  const onSubmit: SubmitHandler<WalletDepositFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 xl:gap-8 px-2 xl:px-8">
        <h2 className="text-white text-[clamp(1rem,3vw,1.75rem)] leading-none font-semibold font-tti-demi-bold">
          Choose a method
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8 font-oxanium">
          {paymentMethods?.map((gateway) => (
            <PaymentGatewayItem
              key={gateway?.id}
              gateway={gateway}
              register={register('method', {
                required: 'Please select a provider',
              })}
            />
          ))}
          <div className="col-span-full order-last">
            <ShowInputError errors={errors} name="method" />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 items-start gap-4 xl:gap-8 font-oxanium">
          <GradientBorderedInput
            className="bg-brand-primary-color-1/[.03]"
            label="enter amount"
            errors={errors}
            type="number"
            placeholder="0"
            icon={<CurrencySymbol className="inline-flex pl-4" />}
            register={register('amount', {
              required: 'Please enter desired amount',
              valueAsNumber: true,
              min: {
                value: 0,
                message: 'Enter amount more than 0',
              },
            })}
          />
          <GradientBorderedInput
            className="bg-brand-primary-color-1/[.03]"
            label="Card number"
            errors={errors}
            type="number"
            placeholder="0000 0000 0000 0000"
            register={register('card.number', {
              required: 'please enter card number',
              valueAsNumber: true,
              minLength: {
                value: 5,
                message: 'Enter valid card number',
              },
            })}
          />
          <GradientBorderedInput
            className="bg-brand-primary-color-1/[.03]"
            label="Card holder"
            placeholder="Jack Smith"
            errors={errors}
            register={register('card.holder', {
              required: 'please enter card holder name',
              validate: {
                noSpecialChars: validateNoSpecialChars,
              },
            })}
          />
          <GradientBorderedInput
            className="bg-brand-primary-color-1/[.03]"
            label="Expiration date"
            errors={errors}
            type="date"
            register={register('card.expireDate', {
              required: 'please specify card expiration date',
              valueAsDate: true,
            })}
          />
          <GradientBorderedInput
            className="bg-brand-primary-color-1/[.03]"
            label="CVV"
            errors={errors}
            type="number"
            placeholder="699"
            icon={
              <AiOutlineInfoCircle className="rotate-180 w-5 h-5 shrink-0 inline-flex mr-4" />
            }
            iconPosition="end"
            register={register('card.cvv', {
              required: 'Please specify card CVV number',
              valueAsNumber: true,
            })}
          />
        </div>
        <div className="text-center py-3">
          <button
            type="submit"
            className="inline-flex gap-2 items-center justify-center text-center text-sm xl:text-base leading-none font-medium font-tti-medium bg-brand-primary-color-1 hover:bg-brand-primary-color-light hover:text-brand-primary-color-1 transition-colors px-4 xl:px-6 py-2.5 rounded-full"
          >
            <span className="first-letter:capitalize">withdraw</span>
          </button>
        </div>
      </div>
    </form>
  );
};
