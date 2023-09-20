import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { GradientBordered } from '../../components/ui/GradientBordered';
import { ShowInputError } from '../../components/ui/ShowInputError';
import { IGamesAndCategories } from '../GamesSingle/components/GameOffers';
import { InputToggleBox } from '../OffersSingle/components/OfferFilterInputBox';

type CurrencySupplierFormInputs = {
  email: string;
  discordTag: string;
  phoneAreaCode: string;
  phoneNumber: string;
  selectedGames: string[];
  requestedGames: string;
};

export const BecomeCurrencySupplierForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CurrencySupplierFormInputs>();

  const [gamesAndCategories, setGamesAndCategories] =
    useState<IGamesAndCategories[]>();

  useEffect(() => {
    if (
      gamesAndCategories?.length === undefined ||
      gamesAndCategories?.length === 0
    ) {
      fetch('./data/gamesAndCategories.json')
        .then((res) => res.json())
        .then((data: IGamesAndCategories[]) => {
          // console.log(data);
          setGamesAndCategories(data);
        })
        .catch(console.error);
    }
  }, [gamesAndCategories?.length]);

  const onSubmit: SubmitHandler<CurrencySupplierFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-28">
      <div className="grid gap-y-8 px-4">
        <GradientBordered className="rounded-[.625rem] before:rounded-[.625rem] before:bg-gradient-bordered-light p-9 bg-multi-gradient-1 max-w-6xl mx-auto px-4 xl:px-16 py-10">
          <div className="grid xl:grid-cols-2 gap-x-8 gap-y-10 font-oxanium text-sm xl:text-base leading-none font-normal">
            {/* email  */}
            <div className="flex flex-col gap-2 xl:gap-4 relative">
              <label htmlFor="email" className="text-brand-black-10">
                Email <span className="text-brand-primary-color-1">*</span>
              </label>
              <GradientBordered className="px-4 py-3 rounded-[.625rem] before:rounded-[.625rem] before:bg-gradient-bordered-deep bg-brand-primary-color-1/[.03]">
                <input
                  type="email"
                  id="email"
                  className="w-full h-full bg-transparent outline-none text-brand-black-5"
                  placeholder="Enter your email"
                  {...register('email', {
                    required: 'Please enter your email',
                  })}
                />
              </GradientBordered>
              {errors && errors?.email ? (
                <p className="text-red-500">{errors.email?.message}</p>
              ) : (
                false
              )}
            </div>
            {/* discordTag */}
            <div className="flex flex-col gap-2 xl:gap-4 relative">
              <label htmlFor="discordTag" className="text-brand-black-10">
                Discord Tag{' '}
                <span className="text-brand-primary-color-1">*</span>
              </label>
              <GradientBordered className="px-4 py-3 rounded-[.625rem] before:rounded-[.625rem] before:bg-gradient-bordered-deep bg-brand-primary-color-1/[.03]">
                <input
                  type="text"
                  id="discordTag"
                  className="w-full h-full bg-transparent outline-none text-brand-black-5"
                  placeholder="Enter your discord tag"
                  {...register('discordTag', {
                    required: 'Enter your discord tag',
                  })}
                />
              </GradientBordered>
              {errors && errors?.discordTag ? (
                <p className="text-red-500">{errors.discordTag?.message}</p>
              ) : (
                false
              )}
            </div>
            {/* phoneAreaCode */}
            <div className="flex flex-col gap-2 xl:gap-4 relative">
              <label htmlFor="phoneAreaCode" className="text-brand-black-10">
                Telegram/Phone Number{' '}
                <span className="text-brand-primary-color-1">*</span>
              </label>
              <GradientBordered className="px-4 py-3 rounded-[.625rem] before:rounded-[.625rem] before:bg-gradient-bordered-deep bg-brand-primary-color-1/[.03]">
                <input
                  type="text"
                  id="phoneAreaCode"
                  className="w-full h-full bg-transparent outline-none text-brand-black-5"
                  placeholder="Enter your area code"
                  {...register('phoneAreaCode', {
                    required: 'Please enter your area code',
                  })}
                />
              </GradientBordered>
              {errors && errors?.phoneAreaCode ? (
                <p className="text-red-500">{errors.phoneAreaCode?.message}</p>
              ) : (
                false
              )}
            </div>

            {/* phone number  */}
            <div className="flex flex-col justify-end gap-2 xl:gap-4 relative">
              <label
                htmlFor="phoneNumber"
                className="text-brand-black-10 invisible pointer-events-none opacity-0 select-none h-0 xl:h-auto"
              >
                Phone Number
                <span className="text-brand-primary-color-1">*</span>
              </label>
              <GradientBordered className="px-4 py-3 rounded-[.625rem] before:rounded-[.625rem] before:bg-gradient-bordered-deep bg-brand-primary-color-1/[.03]">
                <input
                  type="tel"
                  id="phoneNumber"
                  className="w-full h-full bg-transparent outline-none text-brand-black-5"
                  placeholder="Enter your phone number"
                  {...register('phoneNumber', {
                    required: 'Enter your phone number',
                  })}
                />
              </GradientBordered>
              {errors && errors?.phoneNumber ? (
                <p className="text-red-500">{errors.phoneNumber?.message}</p>
              ) : (
                false
              )}
            </div>
          </div>
        </GradientBordered>

        <GradientBordered className="rounded-[.625rem] before:rounded-[.625rem] before:bg-gradient-bordered-light bg-multi-gradient-1 max-w-6xl mx-auto py-10">
          <div className="grid gap-y-11 ">
            <div className="px-5 flex flex-col gap-4">
              <h2 className="font-bold font-tti-bold text-[clamp(1.125rem,4vw,1.5rem)] leading-none pb-4">
                In which game(s) would you{' '}
                <span className="text-brand-primary-color-1/70 bg-clip-text bg-[linear-gradient(300deg,var(--tw-gradient-stops))] from-brand-primary-color-1 to-brand-primary-color-light">
                  like to provide services *
                </span>
              </h2>

              <div className="grid xl:grid-cols-3 gap-4 px-4">
                {gamesAndCategories?.map((item) => (
                  <InputToggleBox
                    label={item.name}
                    key={item.id}
                    value={item.id}
                    type="checkbox"
                    checkMark="white"
                    register={register('selectedGames', {
                      required: 'Please select one or more games',
                    })}
                  />
                ))}
              </div>
              <ShowInputError errors={errors} name="selectedGames" />
            </div>

            <div className="px-5">
              <h2 className="font-bold font-tti-bold text-[clamp(1.125rem,4vw,1.5rem)] leading-none">
                Which game(s) not yet supported on{' '}
                <span className="text-brand-primary-color-1/70 bg-clip-text bg-[linear-gradient(300deg,var(--tw-gradient-stops))] from-brand-primary-color-1 to-brand-primary-color-light">
                  FullBoosts would you like to sell?
                </span>
              </h2>

              <div className="max-w-md font-oxanium text-sm xl:text-base leading-none font-normal">
                <div className="flex flex-col gap-2 xl:gap-4 relative">
                  <label
                    htmlFor="requestedGames"
                    className="text-brand-black-10 invisible pointer-events-none opacity-0 select-none h-0 xl:h-auto"
                  >
                    Request your desired games
                  </label>
                  <GradientBordered className="px-4 py-3 rounded-[.625rem] before:rounded-[.625rem] before:bg-gradient-bordered-deep bg-brand-primary-color-1/[.03]">
                    <textarea
                      id="requestedGames"
                      className="flex min-h-[7rem] max-h-52 w-full h-full bg-transparent outline-none text-brand-black-5"
                      placeholder="Type here"
                      // cols={30}
                      rows={10}
                      {...register('requestedGames', {})}
                    />
                  </GradientBordered>
                  <p className="text-brand-black-20 text-sm xl:text-base leading-none font-normal">
                    We will add them for sure!
                  </p>
                </div>
              </div>
            </div>
            <hr className="border-0 border-t border-brand-primary-color-light/30" />

            <div className="text-center">
              <button
                type="submit"
                className='inline-flex w-44 justify-center items-center px-3 xl:px-6 py-3 xl:py-4 text-lg xl:text-xl leading-tight rounded-md font-semibold font-oxanium text-white bg-fading-theme-gradient-light-to-deep hover:bg-[linear-gradient(theme("colors.brand.primary.color-1")_100%,theme("colors.brand.primary.color-1")_100%)] transition-all'
              >
                Next
              </button>
            </div>
          </div>
        </GradientBordered>
      </div>
    </form>
  );
};
