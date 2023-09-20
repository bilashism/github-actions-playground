import { useAuthenticatedNavigation } from '../hooks/useAuthenticatedNavigation';
import { useAppSelector } from '../redux/hooks';

import { LoadingCircle } from './LoadingCircle';

export const Unauthorized = () => {
  const { isLoading } = useAppSelector((state) => state.user);
  useAuthenticatedNavigation();

  if (isLoading) {
    return <LoadingCircle />;
  }

  return (
    <div className="pt-9 xl:pt-14 flex items-center justify-center">
      <h2 className="text-red-600 text-center">
        You are not authorized to access this resource!
      </h2>
    </div>
  );
};
