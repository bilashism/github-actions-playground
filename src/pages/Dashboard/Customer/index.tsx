import { Outlet } from 'react-router-dom';

import { useAppSelector } from '../../../redux/hooks';

export const Customer = () => {
  const { role } = useAppSelector((state) => state.user.auth);
  return (
    <main>
      <h1 className="">role: {role} </h1>
      <h2>Customer page</h2>
      <Outlet />
    </main>
  );
};
