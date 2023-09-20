import { SubmitHandler, useForm } from 'react-hook-form';

import levelMeterImg from '../../../assets/images/levels/level-meter.svg';
import { UserImageIcon } from '../../../components/ui/UserImageIcon';
import { ProfileLevelIcon } from '../../CurrenciesSingle/components/ProfileLevelIcon';

import { GradientBorderedInput } from './GradientBorderedInput';

type AccountInfoFormInputs = {
  profilePicture: string;
};

export const AccountInfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<AccountInfoFormInputs>();

  const onSubmit: SubmitHandler<AccountInfoFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="grid items-start gap-6 xl:gap-8 p-3 lg:p-6 xl:p-12 font-oxanium">
        <div className="flex flex-col gap-1 max-w-2xl">
          <h2 className="font-tti-demi-bold font-semibold text-lg xl:text-2xl leading-none text-brand-primary-color-1">
            Personal data{' '}
          </h2>
          <p className="text-sm xl:text-base leading-none font-oxanium font-medium text-white">
            Here you can edit your username and avatar. Don&apos;t use
            inappropriate names or pictures
          </p>
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-[repeat(2,min(100%,theme(maxWidth.lg)))] xl:justify-between gap-8 xl:gap-4">
          {/* profile info  */}
          <div className="grid gap-12 order-2 lg:order-none">
            {/* avatar  */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 rounded-md bg-brand-primary-color-1/10 p-3.5 xl:p-5">
                <figure className="overflow-clip aspect-square">
                  <UserImageIcon
                    className="aspect-square w-12 h-12 inline-flex justify-center items-center rounded-circle"
                    width="48"
                    height="48"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <div className="flex flex-col gap-2">
                  <h3 className="font-tti-medium font-medium text-brand-black-5 text-lg xl:text-xl leading-none first-letter:uppercase">
                    Adljghod
                  </h3>
                  <p className="font-tti-regular font-normal text-brand-black-40 leading-none first-letter:uppercase">
                    admin user
                  </p>
                </div>
              </div>
              {/* buttons  */}
              <div className="grid sm:grid-cols-2 gap-5">
                <button
                  type="button"
                  className="flex w-full h-full gap-2 items-center justify-center text-center text-sm xl:text-base leading-none font-medium font-tti-medium bg-brand-primary-color-1 hover:bg-brand-primary-color-light hover:text-brand-primary-color-1 transition-colors px-4 xl:px-6 py-2.5 rounded-md"
                >
                  <span className="">Upload avatar</span>
                </button>
                <button
                  type="button"
                  className="inline-flex gap-4 items-center justify-center text-center text-sm xl:text-base leading-none font-medium font-tti-medium bg-transparent hover:bg-brand-primary-color-1 hover:text-white transition-colors px-4 xl:px-6 py-2.5 rounded-md border border-brand-primary-color-1"
                >
                  Delete avatar
                </button>
              </div>
            </div>
            {/* inputs */}
            <div className="grid gap-6">
              <GradientBorderedInput
                className="bg-brand-primary-color-1/[.03]"
                label="username"
                defaultValue="Your username"
                readOnly
                disabled
              />
              <GradientBorderedInput
                className="bg-brand-primary-color-1/[.03]"
                label="Email address"
                defaultValue="Your Email"
                readOnly
                disabled
              />
            </div>
          </div>
          {/* level info  */}
          <div className="grid items-start gap-10 xl:gap-20">
            <div className="grid gap-5 justify-center text-center lg:justify-end lg:text-end">
              {/* level */}
              <figure className="">
                <ProfileLevelIcon level={2} />
              </figure>
              <figure className="">
                <picture className="">
                  <source media="(min-width: 350px)" srcSet={levelMeterImg} />
                  <img
                    src={levelMeterImg}
                    alt="current level progress"
                    className="inline-flex w-52 h-8"
                    loading="lazy"
                    width="208"
                    height="32"
                    decoding="async"
                    // fetchPriority="low"
                  />
                </picture>
              </figure>
            </div>
            {/* buttons */}
            <div className="grid gap-6 grid-cols-[12rem] justify-center">
              <button
                type="submit"
                className='flex w-full h-full justify-center items-center px-3 xl:px-6 py-2 xl:py-4 text-lg xl:text-xl leading-tight rounded-md font-semibold font-oxanium text-white bg-fading-theme-gradient-light-to-deep hover:bg-[linear-gradient(theme("colors.brand.primary.color-1")_100%,theme("colors.brand.primary.color-1")_100%)] transition-all'
              >
                Partner Panel
              </button>
              <button
                type="submit"
                className='flex w-full h-full justify-center items-center px-3 xl:px-6 py-2 xl:py-4 text-lg xl:text-xl leading-tight rounded-md font-semibold font-oxanium text-white bg-fading-theme-gradient-light-to-deep hover:bg-[linear-gradient(theme("colors.brand.primary.color-1")_100%,theme("colors.brand.primary.color-1")_100%)] transition-all'
              >
                Admin Panel
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="border-none w-full grow h-px bg-gradient-bordered-light" />
      <div className="grid items-start justify-center pt-2 lg:pt-4 xl:pt-8">
        <button
          type="submit"
          className='flex w-full h-full justify-center items-center px-3 xl:px-6 py-2 xl:py-4 text-lg xl:text-xl leading-tight rounded-md font-semibold font-oxanium text-white bg-fading-theme-gradient-light-to-deep hover:bg-[linear-gradient(theme("colors.brand.primary.color-1")_100%,theme("colors.brand.primary.color-1")_100%)] transition-all'
        >
          Confirm Changes
        </button>
      </div> */}
    </form>
  );
};
