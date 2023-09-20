export const ROUTE_PARAM = {
  UID: ':uid',
} as const;

const ROOT_ROUTE = {
  ROOT: '/',
  ALL: '*',
  WORK_WITH_US: '/work-with-us',
  BECOME_BOOSTER: '/become-booster',
  BECOME_CURRENCY_SUPPLIER: '/become-currency-supplier',
  BECOME_CURRENCY_SELLER: '/become-currency-seller',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  SIGNUP_DISCORD: '/auth/discord',
  PROFILE: '/profile',
  UNAUTHORIZED: '/unauthorized',
  ORDERS: '/orders',
  GUIDES: '/guides',
  GAMES: '/games',
  CURRENCIES: '/currencies',
  SUPPORT: '/support',
  DASHBOARD: '/dashboard',
  ABOUT_US: '/about-us',
  CONTACT_US: '/contact-us',
  REFUND_POLICY: '/refund-policy',
  PRIVACY_POLICY: '/privacy-policy',
  COOKIE_POLICY: '/cookie-policy',
  TERMS_OF_SERVICE: '/terms-of-service',
  CREDENTIAL_ON_FILE: '/credential-on-file',
} as const;

const PROFILE_PAGES = {
  ACCOUNT_INFO: `${ROOT_ROUTE.PROFILE}/account-info`,
  GENERAL_SETTINGS: `${ROOT_ROUTE.PROFILE}/general-settings`,
  TRANSACTIONS: `${ROOT_ROUTE.PROFILE}/transactions`,
  WALLET: `${ROOT_ROUTE.PROFILE}/wallet`,
} as const;

const DB_PAGES = {
  DB_CUSTOMER: `${ROOT_ROUTE.DASHBOARD}/customer`,
  DB_PARTNER: `${ROOT_ROUTE.DASHBOARD}/partner`,
  DB_SUPPORT: `${ROOT_ROUTE.DASHBOARD}/support`,
  DB_ADMIN: `${ROOT_ROUTE.DASHBOARD}/admin`,
} as const;

const CUSTOMER_PAGES = {
  CUSTOMER_ORDER: `${DB_PAGES.DB_CUSTOMER}/order`,
} as const;

const PARTNER_PAGES = {
  PARTNER_ORDER: `${DB_PAGES.DB_PARTNER}/order`,
  PARTNER_CLAIM: `${DB_PAGES.DB_PARTNER}/claim`,
} as const;
const SUPPORT_PAGES = {
  SUPPORT_ORDER: `${DB_PAGES.DB_SUPPORT}/order`,
  SUPPORT_TICKETS: `${DB_PAGES.DB_SUPPORT}/tickets`,
  SUPPORT_INCOMING_ORDERS: `${DB_PAGES.DB_SUPPORT}/incoming-orders`,
} as const;
const ADMIN_PAGES = {
  ADMIN_ORDER: `${DB_PAGES.DB_ADMIN}/order`,
  ADMIN_WORK_WITH_US: `${DB_PAGES.DB_ADMIN}/work-with-us`,
  ADMIN_EMPLOYEES: `${DB_PAGES.DB_ADMIN}/employees`,
  ADMIN_PARTNERS: `${DB_PAGES.DB_ADMIN}/partners`,
  ADMIN_INCOMING_ORDERS: `${DB_PAGES.DB_ADMIN}/incoming-orders`,
  ADMIN_USER_MANAGER: `${DB_PAGES.DB_ADMIN}/user-manager`,
  ADMIN_PARTNER_MANAGER: `${DB_PAGES.DB_ADMIN}/partner-manager`,
} as const;

export const ROUTER_PATH = {
  ...ROOT_ROUTE,
  ...PROFILE_PAGES,
  ...DB_PAGES,
  ...CUSTOMER_PAGES,
  ...PARTNER_PAGES,
  ...SUPPORT_PAGES,
  ...ADMIN_PAGES,
  GUIDES_SINGLE: `${ROOT_ROUTE.GUIDES}/${ROUTE_PARAM.UID}`,
  ORDERS_SINGLE: `${ROOT_ROUTE.ORDERS}/${ROUTE_PARAM.UID}`,
  RATE_ORDER: `${ROOT_ROUTE.ORDERS}/${ROUTE_PARAM.UID}/rate-order`,
  GAMES_SINGLE: `${ROOT_ROUTE.GAMES}/${ROUTE_PARAM.UID}`,
  CURRENCIES_SINGLE: `${ROOT_ROUTE.CURRENCIES}/${ROUTE_PARAM.UID}`,
  OFFERS_SINGLE: `${ROOT_ROUTE.GAMES}/${ROUTE_PARAM.UID}/${ROUTE_PARAM.UID}`,
} as const;

export type RouterPath = (typeof ROUTER_PATH)[keyof typeof ROUTER_PATH];
