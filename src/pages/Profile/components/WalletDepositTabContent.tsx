import { SubmitHandler, useForm } from 'react-hook-form';

import applepaySrc from '../../../assets/images/payment-methods/applepay.svg';
import googlepaySrc from '../../../assets/images/payment-methods/googlepay.svg';
import jcbSrc from '../../../assets/images/payment-methods/jcb.svg';
import mastercardSrc from '../../../assets/images/payment-methods/mastercard.svg';
import paypalSrc from '../../../assets/images/payment-methods/paypal.svg';
import sepaSrc from '../../../assets/images/payment-methods/sepa.svg';
import skrillSrc from '../../../assets/images/payment-methods/skrill.svg';
import trustlySrc from '../../../assets/images/payment-methods/trustly.svg';
import visaSrc from '../../../assets/images/payment-methods/visa-inc.svg';
import stripeSrc from '../../../assets/images/stripe.png';
import { ShowInputError } from '../../../components/ui/ShowInputError';

import { PaymentGatewayItem } from './PaymentGatewayItem';

export type PaymentMethod = {
  id: string;
  name: string;
  logo: string;
};

export const paymentMethods: PaymentMethod[] = [
  {
    id: 'e8c20ec9-a5f5-5608-8e8c-eb25757ed737',
    name: 'MasterCard',
    logo: mastercardSrc,
  },
  {
    id: 'cbd0bc38-ba72-5227-8e86-b00709dd7aaa',
    name: 'VISA',
    logo: visaSrc,
  },
  {
    id: '3ea4c2f5-52ac-5df2-bf9a-f1dc7b1e37e8',
    name: 'PayPal',
    logo: paypalSrc,
  },
  {
    id: '49138fd4-8948-5714-8b8b-6edbe24288ea',
    name: 'GooglePay',
    logo: googlepaySrc,
  },
  {
    id: '82667f0b-f66c-5418-89af-4f1ac2724c2c',
    name: 'Trustly',
    logo: trustlySrc,
  },
  {
    id: '25c454a0-8a0b-53cd-812f-fc3c1d51ba02',
    name: 'JCB',
    logo: jcbSrc,
  },
  {
    id: '03201a99-d716-52f7-8ad8-27647026d8a1',
    name: 'Skrill',
    logo: skrillSrc,
  },
  {
    id: 'a8a08095-20a2-5b88-8a62-73bd4051642e',
    name: 'ApplePay',
    logo: applepaySrc,
  },
  {
    id: 'a8c3e698-55c4-5288-8f9a-a04e17daa06e',
    name: 'Sepa',
    logo: sepaSrc,
  },
];

type WalletDepositFormInputs = {
  method: string;
};

export const WalletDepositTabContent = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<WalletDepositFormInputs>();

  const onSubmit: SubmitHandler<WalletDepositFormInputs> = (data) => {
    data.method = data.method.toLowerCase();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 xl:gap-8 px-2 xl:px-8">
        <h2 className="text-white text-[clamp(1rem,3vw,1.75rem)] leading-none font-semibold font-tti-demi-bold">
          Choose a method
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8">
          {paymentMethods?.map((gateway) => (
            <PaymentGatewayItem
              key={gateway?.id}
              gateway={gateway}
              register={register('method', {
                required: 'Please select a method',
              })}
            />
          ))}
          <div className="col-span-full order-last font-oxanium">
            <ShowInputError errors={errors} name="method" />
          </div>
        </div>
        <div className="text-center py-3">
          <button
            type="submit"
            className="inline-flex gap-2 items-center justify-center text-center text-sm xl:text-base leading-none font-medium font-tti-medium bg-brand-primary-color-1 hover:bg-brand-primary-color-light hover:text-brand-primary-color-1 transition-colors px-4 xl:px-6 py-2.5 rounded-full"
          >
            <span className="first-letter:capitalize">deposit</span>
          </button>
        </div>
      </div>
    </form>
  );
};
