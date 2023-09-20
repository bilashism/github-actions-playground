import { ReactNode, useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { Role, ROLES } from '../enums/role';
import { ROUTER_PATH } from '../enums/router-path';
import { useAppSelector } from '../redux/hooks';

import { LoadingCircle } from './LoadingCircle';

type AuthenticatedProps = {
  children: ReactNode;
  roles: Role[];
};

/**
 * The `Authenticated` component is a React component that handles authentication and authorization
 * logic for rendering child components based on user roles and access tokens.
 * @property {ReactNode} children - The `children` property is a special prop in React that allows you
 * to pass components or elements as children to another component. In this case, it allows you to pass
 * any React elements or components as children to the `Authenticated` component.
 * @property {Role[]} roles - The `roles` property is an array of `Role` values. It specifies the roles
 * that are allowed to access the component wrapped by the `Authenticated` component.
 */

export const Authenticated = ({ children, roles }: AuthenticatedProps) => {
  const {
    auth: { accessToken, role },
    isLoading,
  } = useAppSelector((state) => state.user);
  const { pathname } = useLocation();

  const isValidRole = useMemo(() => {
    return roles?.every((allowedRole) =>
      Object.values(ROLES).includes(allowedRole)
    );
  }, [roles]);

  const isPermitted = useMemo(() => {
    return isValidRole && roles.includes(role);
  }, [roles, role, isValidRole]);

  if (isLoading) {
    return <LoadingCircle />;
  }

  if (!accessToken || !role || !isPermitted) {
    return (
      <Navigate
        to={
          !accessToken || !role ? ROUTER_PATH.SIGNIN : ROUTER_PATH.UNAUTHORIZED
        }
        state={{ pathname, roles }}
        replace
      />
    );
  }
  return children;
};
