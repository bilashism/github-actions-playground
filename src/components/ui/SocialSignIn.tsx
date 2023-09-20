import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

import { signInUserWithSocialCredential } from '../../redux/features/user/userSlice';
import { useAppDispatch } from '../../redux/hooks';

const redirectUrl = 'https%3A%2F%2Flocalhost%3A3000%2Fauth%2Fdiscord';
const clientId = '1130074436398239775';
const scope = 'identify%20guilds%20email';

export const discordRedirectUrl = new URL(
  `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code&scope=${scope}`
);

type SocialSignInProps = {
  modal?: {
    onCloseSignInModal?: () => void;
    onOpenSignUpModal?: () => void;
    onCloseSignUpModal?: () => void;
  };
};
export const SocialSignIn = ({ modal }: SocialSignInProps) => {
  const dispatch = useAppDispatch();

  const fbAuthProvider = new FacebookAuthProvider();
  const googleAuthProvider = new GoogleAuthProvider();

  /**
   * The function closeModal is used to close a modal form in a TypeScript React application.
   * @param modalForm - The `modalForm` parameter is of type `SocialSignInProps['modal']`. It is an
   * object that contains properties related to a modal form.
   */
  const closeModal = (modalForm: SocialSignInProps['modal']) => {
    if (modalForm) {
      if (modalForm?.onCloseSignInModal) {
        modalForm?.onCloseSignInModal();
      }
      if (modalForm?.onCloseSignUpModal) {
        modalForm?.onCloseSignUpModal();
      }
    }
  };

  /**
   * The function `genericLoginFeedback` checks if the response object has an error property and displays
   * an appropriate toast message.
   * @param {T} res - The `res` parameter is a generic type `T` that extends the `object` type. It
   * represents the response object returned from a login request.
   */
  const genericLoginFeedback = <T extends object>(res: T) => {
    if ('error' in res) {
      toast.error('Something went wrong!');
    } else {
      toast.success('Login is successful!');
    }
  };

  /**
   * The function `handleGoogleLogin` closes a modal, dispatches a sign-in action with a Google
   * authentication provider, and then provides generic login feedback.
   */
  const handleGoogleLogin = () => {
    closeModal(modal);
    dispatch(signInUserWithSocialCredential(googleAuthProvider)).then(
      genericLoginFeedback
    );
  };

  /**
   * The function `handleFacebookLogin` closes a modal, signs in a user with their Facebook credentials,
   * and provides generic login feedback.
   */
  const handleFacebookLogin = () => {
    closeModal(modal);
    dispatch(signInUserWithSocialCredential(fbAuthProvider)).then(
      genericLoginFeedback
    );
  };

  /**
   * The function `handleDiscordLogin` closes a modal, opens a new window with a Discord redirect URL,
   * and then signs in the user with their Discord credentials.
   */
  const handleDiscordLogin = () => {
    closeModal(modal);
    window.open(discordRedirectUrl.href, '_blank');
    dispatch(signInUserWithSocialCredential('discord')).then(
      genericLoginFeedback
    );
  };

  return (
    <div className="flex flex-wrap gap-4">
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="w-11 h-11 inline-flex justify-center items-center bg-brand-primary-color-1/20 rounded-full hover:bg-brand-primary-color-1 transition-colors"
      >
        <AiOutlineGoogle />
      </button>
      <button
        type="button"
        onClick={handleDiscordLogin}
        className="w-11 h-11 inline-flex justify-center items-center bg-brand-primary-color-1/20 rounded-full hover:bg-brand-primary-color-1 transition-colors"
      >
        <BsDiscord />
      </button>
      <button
        type="button"
        onClick={handleFacebookLogin}
        className="w-11 h-11 inline-flex justify-center items-center bg-brand-primary-color-1/20 rounded-full hover:bg-brand-primary-color-1 transition-colors"
      >
        <FaFacebookF />
      </button>
    </div>
  );
};

SocialSignIn.defaultProps = {
  modal: undefined,
};
