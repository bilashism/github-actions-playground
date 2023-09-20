import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Role } from '../enums/role';
import { ROUTER_PATH } from '../enums/router-path';
import { useAppSelector } from '../redux/hooks';

/**
 * The `useAuthenticatedNavigation` function is a custom hook that redirects the user to a specified
 * route if they have a valid access token and their role matches one of the specified roles.
 */
export const useAuthenticatedNavigation = () => {
  const { accessToken, role } = useAppSelector((state) => state.user.auth);
  const navigate = useNavigate();
  const { state } = useLocation();
  const from = state?.pathname || ROUTER_PATH.ROOT;
  const roles = state?.roles as Role[];

  useEffect(() => {
    if (accessToken && roles?.includes(role)) {
      navigate(from, { replace: true });
    }
  }, [accessToken, roles, role, from, navigate]);
};
