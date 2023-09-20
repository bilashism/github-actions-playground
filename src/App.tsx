import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import { Role, ROLES } from './enums/role';
import { ChatModal } from './pages/shared/chat/ChatModal';
import { setLoading, setUserAuth } from './redux/features/user/userSlice';
import { useAppDispatch } from './redux/hooks';
import { router } from './routes/router';
import { COOKIES, jsCookie } from './utils/jsCookie';

export const App = () => {
  const dispatch = useAppDispatch();

  dispatch(setLoading(true));
  useEffect(() => {
    const accessToken = jsCookie.get(COOKIES.ACCESS_TOKEN);
    const role = (jsCookie.get(COOKIES.ROLE) || ROLES.VISITOR) as Role;
    if (accessToken && role) {
      dispatch(
        setUserAuth({
          accessToken,
          role,
        })
      );
    }
    dispatch(setLoading(false));
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <ChatModal />
      <Toaster />
    </>
  );
};
