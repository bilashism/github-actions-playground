import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ROLES } from '../enums/role';
import { ROUTER_PATH, RouterPath } from '../enums/router-path';
import { useAppSelector } from '../redux/hooks';
import { removeLastSlash } from '../utils';

/**
 * The `useDefaultDashboardRedirect` function is a custom hook that redirects the user to a specific
 * page based on their role when they access the default dashboard route.
 */
export const useDefaultDashboardRedirect = () => {
  const { role } = useAppSelector((state) => state.user.auth);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const normalizedPath = removeLastSlash(pathname.trim()) as RouterPath;

  useEffect(() => {
    if (normalizedPath === ROUTER_PATH.DASHBOARD) {
      switch (role) {
        case ROLES.CUSTOMER:
          navigate(ROUTER_PATH.DB_CUSTOMER);
          break;
        case ROLES.SUPPORT:
          navigate(ROUTER_PATH.DB_SUPPORT);
          break;
        case ROLES.PARTNER:
          navigate(ROUTER_PATH.DB_PARTNER);
          break;
        case ROLES.ADMIN:
          navigate(ROUTER_PATH.DB_ADMIN);
          break;

        default:
          navigate(ROUTER_PATH.UNAUTHORIZED);
          break;
      }
    }
  }, [normalizedPath, role, navigate]);
};
