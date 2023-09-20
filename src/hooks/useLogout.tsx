import { signOut } from 'firebase/auth';

import { auth } from '../lib/firebase';
import { EMPTY_USER_AUTH, setUserAuth } from '../redux/features/user/userSlice';
import { useAppDispatch } from '../redux/hooks';

export const useLogout = () => {
  const dispatch = useAppDispatch();

  const logOutUser = async () => {
    if (auth?.currentUser) {
      await signOut(auth);
    }

    dispatch(setUserAuth(EMPTY_USER_AUTH));
  };

  return { logOutUser };
};
