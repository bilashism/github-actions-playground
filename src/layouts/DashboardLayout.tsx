import { Outlet, ScrollRestoration } from 'react-router-dom';

import { useDefaultDashboardRedirect } from '../hooks/useDefaultDashboardRedirect';
import useMatchMedia, { DESKTOP_SCREEN } from '../hooks/useMatchMedia';
import { DashboardProvider } from '../pages/Dashboard/components/DashboardProvider';
import { Navbar } from '../pages/shared/Navbar';
import { lazilyLoadable } from '../utils/lazilyLoadable';

const { DashboardSidebar } = lazilyLoadable(
  () => import('../pages/Dashboard/components/DashboardSidebar')
);

export const DashboardLayout = () => {
  useDefaultDashboardRedirect();
  const isDesktop = useMatchMedia(DESKTOP_SCREEN); // 1280px

  return (
    <DashboardProvider>
      <ScrollRestoration />
      <Navbar />
      <div className="w-full h-full grid xl:grid-cols-[min(100%,16rem)_1fr] gap-4 xl:h-[calc(100vh-97px)]">
        {isDesktop ? (
          <aside className="relative isolate overflow-auto h-[inherit] z-0">
            <DashboardSidebar />
            <hr className="hidden xl:block border-none bg-fading-theme-gradient-25 [--angle:100deg] absolute w-px h-full rotate-180 -z-10 right-0 bottom-0" />
          </aside>
        ) : null}
        <Outlet />
      </div>
    </DashboardProvider>
  );
};
