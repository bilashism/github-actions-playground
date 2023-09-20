import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { ROUTER_PATH } from '../../enums/router-path';
import { useAuthenticatedNavigation } from '../../hooks/useAuthenticatedNavigation';
import { signInUserWithEmailAndPassword } from '../../redux/features/user/userSlice';
import { useAppDispatch } from '../../redux/hooks';

import { SocialSignIn } from './SocialSignIn';

type SignInFormInputs = {
  emailOrUsername: string;
  password: string;
};

type SignInFormProps = {
  modal?: {
    onCloseSignInModal?: () => void;
    onOpenSignUpModal?: () => void;
    onCloseSignUpModal?: () => void;
  };
};

export const SignInForm = ({ modal }: SignInFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  // const {
  // auth: { accessToken, role },
  // isLoading,
  // } = useAppSelector((state) => state.user);
  // const navigate = useNavigate();
  // const { state } = useLocation();
  // const from = state?.pathname || ROUTER_PATH.ROOT;
  // console.log(location, from);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<SignInFormInputs>();

  useAuthenticatedNavigation();

  const onSubmit: SubmitHandler<SignInFormInputs> = ({
    emailOrUsername: email,
    password,
  }) => {
    if (!email || !password) return;

    dispatch(signInUserWithEmailAndPassword({ email, password }))
      .then((response) => {
        if (response?.payload) {
          toast('Signed in successfully');
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
        if (modal && modal?.onCloseSignInModal) {
          modal.onCloseSignInModal();
        }
      });
  };
  const handlePasswordReveal = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex flex-col gap-4 xl:gap-5 bg-fading-theme-gradient-top-to-bottom rounded-[20px] p-5 xl:p-6">
      <h2 className="font-tti-bold text-center">
        <span className="text-white text-[clamp(1.5rem,4vw,1.875rem)] font-bold">
          Sign in
        </span>
      </h2>

      <form
        className="flex flex-col gap-6 xl:gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2 xl:gap-[.875rem] relative font-oxanium">
          <label
            htmlFor="emailOrUsername"
            className="text-brand-black-10 text-sm xl:text-lg leading-none font-normal"
          >
            Email or username
          </label>
          <div className="relative isolate rounded-[.65rem] overflow-hidden gradient-bordered before:p-px before:rounded-[0.65rem] before:bg-gradient-bordered-deep">
            <input
              type="text"
              className="w-full h-full rounded-[.65rem] py-2.5 xl:py-[15px] px-2 xl:px-4 bg-transparent outline-none placeholder:text-base placeholder:leading-none placeholder:font-normal"
              id="emailOrUsername"
              placeholder="Enter your email or username"
              {...register('emailOrUsername', {
                required: 'Email or username is required',
              })}
            />
          </div>
          {errors && errors?.emailOrUsername ? (
            <p className="text-red-500">{errors.emailOrUsername?.message}</p>
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
          </label>
          <div className="relative isolate rounded-[.65rem] overflow-hidden gradient-bordered before:p-px before:rounded-[0.65rem] before:bg-gradient-bordered-deep flex flex-row justify-between items-center gap-2 pr-4">
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full h-full rounded-[.65rem] py-2.5 xl:py-[15px] px-2 xl:px-4 bg-transparent outline-none placeholder:text-base placeholder:leading-none placeholder:font-normal"
              id="password"
              placeholder="Your password"
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

        <div className="text-center">
          <button
            type="submit"
            className='flex w-full h-full justify-center items-center px-3 xl:px-6 py-2 xl:py-4 text-lg xl:text-xl leading-tight rounded-md font-semibold font-oxanium text-white bg-fading-theme-gradient-light-to-deep hover:bg-[linear-gradient(theme("colors.brand.primary.color-1")_100%,theme("colors.brand.primary.color-1")_100%)] transition-all'
          >
            Sign In
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
          Don’t have an account?{' '}
          {modal?.onCloseSignUpModal ? (
            <button
              type="button"
              className="underline text-brand-primary-color-1 hover:text-brand-primary-color-light transition-colors"
              onClick={() => {
                if (
                  modal &&
                  modal?.onCloseSignInModal &&
                  modal?.onOpenSignUpModal
                ) {
                  modal.onCloseSignInModal();
                  modal.onOpenSignUpModal();
                }
              }}
            >
              Registration
            </button>
          ) : (
            <Link
              to={ROUTER_PATH.SIGNUP}
              className="underline text-brand-primary-color-1 hover:text-brand-primary-color-light transition-colors"
            >
              Registration
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

SignInForm.defaultProps = {
  modal: undefined,
};
