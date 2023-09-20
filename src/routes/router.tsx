import { createBrowserRouter } from 'react-router-dom';

import { ROLES } from '../enums/role';
import { ROUTER_PATH } from '../enums/router-path';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { RootLayout } from '../layouts/RootLayout';
import { lazilyLoadable } from '../utils/lazilyLoadable';

const { Home } = lazilyLoadable(() => import('../pages/Home'));
const { NotFound } = lazilyLoadable(() => import('../pages/NotFound'));
const { Authenticated } = lazilyLoadable(
  () => import('../components/Authenticated')
);
const { ErrorElement } = lazilyLoadable(
  () => import('../components/ErrorElement')
);
const { SignupDiscord } = lazilyLoadable(
  () => import('../components/SignupDiscord')
);
const { Unauthorized } = lazilyLoadable(
  () => import('../components/Unauthorized')
);
const { Testing } = lazilyLoadable(() => import('../components/Testing'));
const { WorkWithUs } = lazilyLoadable(() => import('../pages/WorkWithUs'));
const { BecomeBooster } = lazilyLoadable(
  () => import('../pages/BecomeBooster')
);
const { BecomeCurrencySupplier } = lazilyLoadable(
  () => import('../pages/BecomeCurrencySupplier')
);
const { BecomeCurrencySeller } = lazilyLoadable(
  () => import('../pages/BecomeCurrencySeller')
);
const { Profile } = lazilyLoadable(() => import('../pages/Profile'));
const { AccountInfo } = lazilyLoadable(
  () => import('../pages/Profile/components/AccountInfo')
);
const { GeneralSettings } = lazilyLoadable(
  () => import('../pages/Profile/components/GeneralSettings')
);
const { Transactions } = lazilyLoadable(
  () => import('../pages/Profile/components/Transactions')
);
const { Wallet } = lazilyLoadable(
  () => import('../pages/Profile/components/Wallet')
);
const { Guides } = lazilyLoadable(() => import('../pages/Guides'));
const { GuidesSingle } = lazilyLoadable(() => import('../pages/GuidesSingle'));
const { Support } = lazilyLoadable(() => import('../pages/Support'));
const { Games } = lazilyLoadable(() => import('../pages/Games'));
const { GamesSingle } = lazilyLoadable(() => import('../pages/GamesSingle'));
const { CurrenciesSingle } = lazilyLoadable(
  () => import('../pages/CurrenciesSingle')
);
const { Orders } = lazilyLoadable(() => import('../pages/Orders'));
const { OrdersSingle } = lazilyLoadable(() => import('../pages/OrdersSingle'));
const { RateOrder } = lazilyLoadable(() => import('../pages/RateOrder'));

const { SignIn } = lazilyLoadable(() => import('../pages/SignIn'));
const { SignUp } = lazilyLoadable(() => import('../pages/SignUp'));
const { OffersSingle } = lazilyLoadable(() => import('../pages/OffersSingle'));
const { AboutUs } = lazilyLoadable(() => import('../pages/AboutUs'));
const { RefundPolicy } = lazilyLoadable(() => import('../pages/RefundPolicy'));
const { CookiePolicy } = lazilyLoadable(() => import('../pages/CookiePolicy'));
const { TermsOfService } = lazilyLoadable(
  () => import('../pages/TermsOfService')
);
const { CredentialOnFile } = lazilyLoadable(
  () => import('../pages/CredentialOnFile')
);

// dashboard pages
const { Customer: DBCustomer } = lazilyLoadable(
  () => import('../pages/Dashboard/Customer')
);
const { Support: DBSupport } = lazilyLoadable(
  () => import('../pages/Dashboard/Support')
);
const { Admin: DBAdmin } = lazilyLoadable(
  () => import('../pages/Dashboard/Admin')
);
const { Partner: DBPartner } = lazilyLoadable(
  () => import('../pages/Dashboard/Partner')
);
const { PartnerOrder } = lazilyLoadable(
  () => import('../pages/Dashboard/Partner/Order')
);
const { PartnerClaim } = lazilyLoadable(
  () => import('../pages/Dashboard/Partner/Claim')
);

export const router = createBrowserRouter([
  {
    path: ROUTER_PATH.ROOT,
    element: <RootLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTER_PATH.WORK_WITH_US,
        caseSensitive: true,
        element: <WorkWithUs />,
      },
      {
        path: ROUTER_PATH.BECOME_BOOSTER,
        caseSensitive: true,
        element: <BecomeBooster />,
      },
      {
        path: ROUTER_PATH.BECOME_CURRENCY_SUPPLIER,
        caseSensitive: true,
        element: <BecomeCurrencySupplier />,
      },
      {
        path: ROUTER_PATH.BECOME_CURRENCY_SELLER,
        caseSensitive: true,
        element: <BecomeCurrencySeller />,
      },
      {
        path: ROUTER_PATH.GUIDES,
        caseSensitive: true,
        element: <Guides />,
      },
      {
        path: ROUTER_PATH.GUIDES_SINGLE,
        caseSensitive: true,
        element: <GuidesSingle />,
      },
      {
        path: ROUTER_PATH.SIGNIN,
        caseSensitive: true,
        element: <SignIn />,
      },
      {
        path: ROUTER_PATH.SIGNUP,
        caseSensitive: true,
        element: <SignUp />,
      },
      {
        path: ROUTER_PATH.SIGNUP_DISCORD,
        caseSensitive: true,
        element: <SignupDiscord />,
      },
      {
        path: ROUTER_PATH.ORDERS,
        caseSensitive: true,
        element: (
          <Authenticated roles={[...Object.values(ROLES)]}>
            <Orders />
          </Authenticated>
        ),
      },
      {
        path: ROUTER_PATH.ORDERS_SINGLE,
        caseSensitive: true,
        element: (
          <Authenticated roles={[...Object.values(ROLES)]}>
            <OrdersSingle />
          </Authenticated>
        ),
      },
      {
        path: ROUTER_PATH.RATE_ORDER,
        caseSensitive: true,
        element: (
          <Authenticated roles={[...Object.values(ROLES)]}>
            <RateOrder />
          </Authenticated>
        ),
      },
      {
        path: ROUTER_PATH.PROFILE,
        caseSensitive: true,
        element: (
          <Authenticated roles={[...Object.values(ROLES)]}>
            <Profile />
          </Authenticated>
        ),
        children: [
          {
            index: true,
            caseSensitive: true,
            element: <AccountInfo />,
          },
          {
            path: ROUTER_PATH.ACCOUNT_INFO,
            caseSensitive: true,
            element: <AccountInfo />,
          },
          {
            path: ROUTER_PATH.GENERAL_SETTINGS,
            caseSensitive: true,
            element: <GeneralSettings />,
          },
          {
            path: ROUTER_PATH.TRANSACTIONS,
            caseSensitive: true,
            element: <Transactions />,
          },
          {
            path: ROUTER_PATH.WALLET,
            caseSensitive: true,
            element: <Wallet />,
          },
        ],
      },
      {
        path: ROUTER_PATH.GAMES,
        caseSensitive: true,
        element: (
          // <Authenticated roles={[...Object.values(ROLES)]}>
          <Games />
          // </Authenticated>
        ),
      },
      {
        path: ROUTER_PATH.SUPPORT,
        caseSensitive: true,
        element: (
          // <Authenticated roles={[...Object.values(ROLES)]}>
          <Support />
          // </Authenticated>
        ),
      },
      {
        path: ROUTER_PATH.GAMES_SINGLE,
        caseSensitive: true,
        element: (
          // <Authenticated roles={[...Object.values(ROLES)]}>
          <GamesSingle />
          // </Authenticated>
        ),
      },
      {
        path: ROUTER_PATH.CURRENCIES_SINGLE,
        caseSensitive: true,
        element: (
          // <Authenticated roles={[...Object.values(ROLES)]}>
          <CurrenciesSingle />
          // </Authenticated>
        ),
      },
      {
        path: ROUTER_PATH.OFFERS_SINGLE,
        caseSensitive: true,
        element: (
          // <Authenticated roles={[...Object.values(ROLES)]}>
          <OffersSingle />
          // </Authenticated>
        ),
      },
      {
        path: ROUTER_PATH.ABOUT_US,
        caseSensitive: true,
        element: <AboutUs />,
      },
      {
        path: ROUTER_PATH.REFUND_POLICY,
        caseSensitive: true,
        element: <RefundPolicy />,
      },
      {
        path: ROUTER_PATH.COOKIE_POLICY,
        caseSensitive: true,
        element: <CookiePolicy />,
      },
      {
        path: ROUTER_PATH.TERMS_OF_SERVICE,
        caseSensitive: true,
        element: <TermsOfService />,
      },
      {
        path: ROUTER_PATH.CREDENTIAL_ON_FILE,
        caseSensitive: true,
        element: <CredentialOnFile />,
      },
      {
        path: '/testing',
        caseSensitive: true,
        element: <Testing />,
      },
      {
        path: ROUTER_PATH.UNAUTHORIZED,
        // caseSensitive: true,
        element: <Unauthorized />,
      },
      //! must come at the very last of all routes
      {
        path: ROUTER_PATH.ALL,
        element: <NotFound />,
      },
    ],
  },
  {
    path: ROUTER_PATH.DASHBOARD,
    caseSensitive: true,
    element: (
      <Authenticated roles={[...Object.values(ROLES)]}>
        <DashboardLayout />
      </Authenticated>
    ),
    children: [
      {
        path: ROUTER_PATH.DB_CUSTOMER,
        caseSensitive: true,
        element: (
          <Authenticated
            roles={[...Object.values(ROLES).filter((r) => r !== ROLES.PARTNER)]}
          >
            <DBCustomer />
          </Authenticated>
        ),
      },
      {
        path: ROUTER_PATH.DB_SUPPORT,
        caseSensitive: true,
        element: (
          <Authenticated
            roles={[
              ...Object.values(ROLES).filter((r) => r !== ROLES.CUSTOMER),
            ]}
          >
            <DBSupport />
          </Authenticated>
        ),
      },
      {
        path: ROUTER_PATH.DB_ADMIN,
        caseSensitive: true,
        element: (
          <Authenticated roles={[...Object.values(ROLES)]}>
            <DBAdmin />
          </Authenticated>
        ),
      },
      {
        path: ROUTER_PATH.DB_PARTNER,
        caseSensitive: true,
        element: (
          <Authenticated
            roles={[
              ...Object.values(ROLES).filter((r) => r !== ROLES.CUSTOMER),
            ]}
          >
            <DBPartner />
          </Authenticated>
        ),
        children: [
          {
            index: true,
            caseSensitive: true,
            element: <PartnerOrder />,
          },
          {
            path: ROUTER_PATH.PARTNER_ORDER,
            caseSensitive: true,
            element: <PartnerOrder />,
          },
          {
            path: ROUTER_PATH.PARTNER_CLAIM,
            caseSensitive: true,
            element: <PartnerClaim />,
          },
        ],
      },
    ],
  },
]);
