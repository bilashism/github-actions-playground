import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { GradientBordered } from '../../components/ui/GradientBordered';
import { IGamesAndCategories } from '../GamesSingle/components/GameOffers';
import { GradientBorderedInput } from '../Profile/components/GradientBorderedInput';

export type HoursCommitment = {
  id: string;
  name: string;
};

const HOURS_COMMITMENT: HoursCommitment[] = [
  {
    id: 'hour-8a1c4cd0-752c-5ca3-87cc-1b74a1ac6884',
    name: 'Less than 3 hours',
  },
  {
    id: 'hour-a989c601-bf15-5b3c-b09c-f802244b5c55',
    name: 'Less than 5 hours',
  },
  {
    id: 'hour-8d638ac9-8fb3-5784-925c-4c86d7819192',
    name: 'Less than 7 hours',
  },
  {
    id: 'hour-d29e404d-d882-5473-869e-3aaf94b7f0e7',
    name: 'More than 7 hours',
  },
];

type BoosterFormInputs = {
  email: string;
  discordTag: string;
  telegramUsername: string;
  hoursCommitment: string;
  selectedGames: string[];
};

export const BecomeBoosterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BoosterFormInputs>();

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

  const onSubmit: SubmitHandler<BoosterFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-28">
      <div className="grid gap-y-8 px-4">
        <GradientBordered className="rounded-[.625rem] before:rounded-[.625rem] before:bg-gradient-bordered-light p-9 bg-multi-gradient-1 max-w-6xl mx-auto px-4 xl:px-16 py-10">
          <div className="grid items-start xl:grid-cols-2 gap-x-8 gap-y-10 font-oxanium text-sm xl:text-base leading-none font-normal">
            {/* email  */}
            <GradientBorderedInput
              label="Email"
              placeholder="Enter your email"
              type="email"
              errors={errors}
              showRequiredStar
              register={register('email', {
                required: 'Please enter your email',
              })}
            />
            {/* discordTag */}
            <GradientBorderedInput
              label="Discord Tag"
              placeholder="Enter your discord tag"
              type="text"
              errors={errors}
              showRequiredStar
              register={register('discordTag', {
                required: 'Please enter your discord tag',
              })}
            />
            {/* telegramUsername */}
            <div className="col-span-full">
              <GradientBorderedInput
                label="Telegram @username"
                placeholder="Enter your telegram username"
                type="text"
                errors={errors}
                register={register('telegramUsername', {})}
              >
                <p className="text-brand-black-10">
                  Please be advised we use telegram{' '}
                  <Link
                    target="_blank"
                    to="https://desktop.telegram.org/"
                    className="hover:underline"
                  >
                    (https://desktop.telegram.org/)
                  </Link>{' '}
                  for orders distribution.
                </p>
              </GradientBorderedInput>
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
                  <label
                    key={item.id}
                    htmlFor={item.id}
                    className="flex gap-3 items-center relative isolate z-0 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id={item.id}
                      value={item.id}
                      className="appearance-none sr-only peer"
                      {...register('selectedGames', {
                        required: 'Please select one or more games',
                      })}
                    />
                    <span
                      className={`peer-checked:bg-brand-primary-color-1 transition-colors checked-bg-image-check-mark bg-center bg-no-repeat inline-flex w-4 aspect-square border-2 border-brand-primary-color-1/50 bg-transparent `}
                    />
                    <span className="inline-flex text-base leading-none font-normal text-brand-black-20 font-oxanium">
                      {item.name}
                    </span>
                  </label>
                ))}
              </div>
              {errors && errors?.selectedGames ? (
                <p className="text-red-500">{errors.selectedGames?.message}</p>
              ) : (
                false
              )}
            </div>

            <div className="px-5 flex flex-col gap-4">
              <h2 className="font-bold font-tti-bold text-[clamp(1.125rem,4vw,1.5rem)] leading-none pb-4">
                How many hours per day would you{' '}
                <span className="text-brand-primary-color-1/70 bg-clip-text bg-[linear-gradient(300deg,var(--tw-gradient-stops))] from-brand-primary-color-1 to-brand-primary-color-light">
                  be able to devote this job? *
                </span>
              </h2>

              <div className="grid gap-4 px-4">
                {HOURS_COMMITMENT?.map((item) => (
                  <label
                    key={item.id}
                    htmlFor={item.id}
                    className="flex gap-3 items-center relative isolate z-0 cursor-pointer"
                  >
                    <input
                      type="radio"
                      id={item.id}
                      value={item.name}
                      className="appearance-none sr-only peer"
                      {...register('hoursCommitment', {
                        required: 'Please select hours per day',
                      })}
                    />
                    <span
                      className={`peer-checked:bg-brand-primary-color-1 transition-colors checked-bg-image-check-mark bg-center bg-no-repeat inline-flex w-4 aspect-square border-2 border-brand-primary-color-1/50 bg-transparent `}
                    />
                    <span className="inline-flex text-base leading-none font-normal text-brand-black-20 font-oxanium">
                      {item.name}
                    </span>
                  </label>
                ))}
              </div>
              {errors && errors?.hoursCommitment ? (
                <p className="text-red-500">
                  {errors.hoursCommitment?.message}
                </p>
              ) : (
                false
              )}
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
