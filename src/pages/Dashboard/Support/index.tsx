import { Outlet } from 'react-router-dom';

import { useAppSelector } from '../../../redux/hooks';

export const Support = () => {
  const { role } = useAppSelector((state) => state.user.auth);
  return (
    <main>
      <h1 className="">role: {role} </h1>
      <h2>Support page</h2>
      <Outlet />
    </main>
  );
};
