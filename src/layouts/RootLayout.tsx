import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Footer } from '../pages/shared/Footer';
import { Navbar } from '../pages/shared/Navbar';

export const RootLayout = () => (
  <>
    <ScrollRestoration />
    <Navbar />
    <Outlet />
    <Footer />
  </>
);
