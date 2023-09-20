import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import PasswordStrengthBar from 'react-password-strength-bar';
import { Link } from 'react-router-dom';

import { ROUTER_PATH } from '../../enums/router-path';
import { createNewUserWithEmailAndPassword } from '../../redux/features/user/userSlice';
import { useAppDispatch } from '../../redux/hooks';

import { SocialSignIn } from './SocialSignIn';

type SignUpFormInputs = {
  email: string;
  password: string;
  agreed: boolean;
};
type SignUpFormProps = {
  modal?: {
    onCloseSignUpModal?: () => void;
    onOpenSignInModal?: () => void;
    onCloseSignInModal?: () => void;
  };
};
export const SignUpForm = ({ modal }: SignUpFormProps) => {
  const [inputPassword, setInputPassword] = useState<string>();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const onSubmit: SubmitHandler<SignUpFormInputs> = ({
    email,
    password,
    agreed,
  }) => {
    if (!agreed) return;

    dispatch(createNewUserWithEmailAndPassword({ email, password }))
      .then((response) => {
        if (response?.payload) {
          toast('Signed up successfully');
        } else {
          toast('Something went wrong');
        }
      })
      .catch((err) => {
        // console.log(err);
        toast(err?.message);
      })
      .finally(() => {
        reset();
        if (modal && modal.onCloseSignUpModal) {
          modal?.onCloseSignUpModal();
        }
      });
  };
  const handlePasswordReveal = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex flex-col gap-4 xl:gap-5 bg-fading-theme-gradient-top-to-bottom rounded-[20px] p-5 xl:p-6">
      <h2 className="font-tti-bold text-center">
        <span className="text-white font-bold text-[clamp(1.5rem,4vw,1.875rem)]">
          Registration
        </span>
      </h2>

      <form
        className="flex flex-col gap-6 xl:gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2 xl:gap-[.875rem] relative font-oxanium">
          <label
            htmlFor="email"
            className="text-brand-black-10 text-sm xl:text-lg leading-none font-normal"
          >
            Email
          </label>
          <div className="relative isolate rounded-[.65rem] overflow-hidden gradient-bordered before:p-px before:rounded-[0.65rem] before:bg-gradient-bordered-deep">
            <input
              type="email"
              className="w-full h-full rounded-[.65rem] py-2.5 xl:py-[15px] px-2 xl:px-4 bg-transparent outline-none placeholder:text-base placeholder:leading-none placeholder:font-normal"
              id="email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
              })}
            />
          </div>
          {errors && errors?.email ? (
            <p className="text-red-500">{errors.email?.message}</p>
          ) : (
            false
          )}
        </div>

        <div className="flex flex-col gap-2 xl:gap-[.875rem] relative font-oxanium">
          <label
            htmlFor="password"
            className="text-brand-black-10 text-sm xl:text-lg leading-none font-normal flex justify-between "
          >
            <span className="">Password</span>
            <PasswordStrengthBar
              className="max-w-[120px] w-full"
              password={inputPassword}
            />
          </label>
          <div className="relative isolate rounded-[.65rem] overflow-hidden gradient-bordered before:p-px before:rounded-[0.65rem] before:bg-gradient-bordered-deep flex flex-row justify-between items-center gap-2 pr-4">
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full h-full rounded-[.65rem] py-2.5 xl:py-[15px] px-2 xl:px-4 bg-transparent outline-none placeholder:text-base placeholder:leading-none placeholder:font-normal"
              id="password"
              placeholder="Your password"
              onInput={(ev) =>
                setInputPassword((ev?.target as HTMLInputElement).value)
              }
              {...register('password', {
                required: 'Password is required',
              })}
            />
            <button
              type="button"
              onClick={handlePasswordReveal}
              aria-label="reveal password"
              className="w-6 h-6 inline-flex justify-center items-center"
            >
              {showPassword ? <BsEyeSlash /> : <BsEye />}
            </button>
          </div>
          {errors && errors?.password ? (
            <p className="text-red-500">{errors.password?.message}</p>
          ) : (
            false
          )}
        </div>

        <div className="flex flex-col gap-2 xl:gap-[.875rem] relative font-oxanium">
          <label
            htmlFor="terms-and-conditions"
            className="flex gap-3 items-center"
          >
            <input
              type="checkbox"
              id="terms-and-conditions"
              className="inline-flex w-5 h-5 accent-brand-primary-color-1 border-0 outline-0 p-0 shadow-none"
              {...register('agreed', {
                required: 'Agreement with our TOC is required to sign up.',
              })}
            />
            <span className="text-base leading-none font-normal text-brand-black-20">
              By registration, you accept{' '}
              <Link
                to="/"
                className="underline text-brand-primary-color-1 hover:text-brand-primary-shade-1 transition-colors"
              >
                Terms and Conditions
              </Link>{' '}
              &{' '}
              <Link
                to="/"
                className="underline text-brand-primary-color-1 hover:text-brand-primary-shade-1 transition-colors"
              >
                Privacy Policy.
              </Link>
            </span>
          </label>
          {errors && errors?.agreed ? (
            <p className="text-red-500">{errors.agreed?.message}</p>
          ) : (
            false
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className='flex w-full h-full justify-center items-center px-3 xl:px-6 py-2 xl:py-4 text-lg xl:text-xl leading-tight rounded-md font-semibold font-oxanium text-white bg-fading-theme-gradient-light-to-deep hover:bg-[linear-gradient(theme("colors.brand.primary.color-1")_100%,theme("colors.brand.primary.color-1")_100%)] transition-all'
          >
            Registration
          </button>
        </div>
      </form>

      <div className="text-center flex flex-col items-center gap-3 xl:gap-6">
        <p className="text-brand-black-10 text-sm xl:text-lg leading-none font-normal font-oxanium">
          Or continue with social network
        </p>
        <SocialSignIn modal={modal} />
      </div>

      <div className="text-center">
        <p className="text-brand-black-10 text-sm xl:text-lg leading-none font-normal font-oxanium">
          Already have an account?{' '}
          {modal?.onCloseSignUpModal ? (
            <button
              type="button"
              className="underline text-brand-primary-color-1 hover:text-brand-primary-color-light transition-colors"
              onClick={() => {
                if (
                  modal &&
                  modal?.onCloseSignUpModal &&
                  modal?.onOpenSignInModal
                ) {
                  modal?.onCloseSignUpModal();
                  modal?.onOpenSignInModal();
                }
              }}
            >
              Sign in
            </button>
          ) : (
            <Link
              to={ROUTER_PATH.SIGNIN}
              className="underline text-brand-primary-color-1 hover:text-brand-primary-color-light transition-colors"
            >
              Sign in
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

SignUpForm.defaultProps = {
  modal: undefined,
};
