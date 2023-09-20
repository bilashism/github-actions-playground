import { LuLogOut, LuUsers } from 'react-icons/lu';

import { ClaimIcon, OrderIcon } from '../../../components/icons/icons';
import { ExcludedVisitorRole, ROLES } from '../../../enums/role';
import { ROUTER_PATH } from '../../../enums/router-path';
import { useLogout } from '../../../hooks/useLogout';
import { useAppSelector } from '../../../redux/hooks';
import { TopLevelLinkItem } from '../../shared/Footer';

import { SidebarLinkItem } from './SidebarLinkItem';

export type TopLevelLinkItemWithIcon = {
  icon: JSX.Element;
} & TopLevelLinkItem;

export const CUSTOMER_LINKS: Readonly<TopLevelLinkItemWithIcon[]> = [
  {
    to: ROUTER_PATH.CUSTOMER_ORDER,
    label: 'Order',
    icon: <OrderIcon />,
  },
];
export const PARTNER_LINKS: Readonly<TopLevelLinkItemWithIcon[]> = [
  {
    to: ROUTER_PATH.PARTNER_ORDER,
    label: 'Order',
    icon: <OrderIcon />,
  },
  { to: ROUTER_PATH.PARTNER_CLAIM, label: 'Claim', icon: <ClaimIcon /> },
];
export const SUPPORT_LINKS: Readonly<TopLevelLinkItemWithIcon[]> = [
  {
    to: ROUTER_PATH.SUPPORT_ORDER,
    label: 'Order',
    icon: <OrderIcon />,
  },
  { to: ROUTER_PATH.SUPPORT_TICKETS, label: 'Tickets', icon: <OrderIcon /> },
  {
    to: ROUTER_PATH.SUPPORT_INCOMING_ORDERS,
    label: 'Incoming Orders',
    icon: <OrderIcon />,
  },
];
export const ADMIN_LINKS: Readonly<TopLevelLinkItemWithIcon[]> = [
  {
    to: ROUTER_PATH.ADMIN_ORDER,
    label: 'Order',
    icon: <OrderIcon />,
  },
  {
    to: ROUTER_PATH.ADMIN_WORK_WITH_US,
    label: 'Work with us',
    icon: <OrderIcon />,
  },
  {
    to: ROUTER_PATH.ADMIN_EMPLOYEES,
    label: 'Employees',
    icon: <OrderIcon />,
  },
  { to: ROUTER_PATH.ADMIN_PARTNERS, label: 'Partners', icon: <OrderIcon /> },
  {
    to: ROUTER_PATH.ADMIN_INCOMING_ORDERS,
    label: 'Incoming orders',
    icon: <OrderIcon />,
  },
  {
    to: ROUTER_PATH.ADMIN_USER_MANAGER,
    label: 'User Manager',
    icon: <OrderIcon />,
  },
  {
    to: ROUTER_PATH.ADMIN_PARTNER_MANAGER,
    label: 'Partner Manager',
    icon: <LuUsers />,
  },
];

const ROLE_LINKS_MAP: Partial<
  Record<ExcludedVisitorRole, Readonly<TopLevelLinkItemWithIcon[]>>
> = {
  [ROLES.CUSTOMER]: CUSTOMER_LINKS,
  [ROLES.PARTNER]: PARTNER_LINKS,
  [ROLES.SUPPORT]: SUPPORT_LINKS,
  [ROLES.ADMIN]: ADMIN_LINKS,
};

export const DashboardSidebar = () => {
  const { logOutUser } = useLogout();
  const { role } = useAppSelector((state) => state.user.auth);

  const ROLE_LINKS = ROLE_LINKS_MAP[role as ExcludedVisitorRole];

  return (
    // <div className="grid grid-rows-1 h-full w-full xl:px-5 xl:py-8 gap-4">
    <div className="flex flex-col h-[inherit] overflow-auto minimal-scrollbar p-4 gap-4">
      {ROLE_LINKS?.map((link) => (
        <SidebarLinkItem key={crypto.randomUUID().toString()} payload={link} />
      ))}
      <button
        type="button"
        className="mt-auto w-full flex flex-wrap items-center gap-4 px-3 xl:px-5 py-2 xl:py-4 rounded-lg group bg-brand-primary-color-1/[.04] hover:bg-brand-primary-color-1/10 transition-colors"
        onClick={logOutUser}
      >
        <LuLogOut className="w-6 h-6 group-hover:text-brand-primary-color-1 transition-colors" />
        <span className="first-letter:capitalize group-hover:text-brand-primary-color-1 transition-colors font-tti-medium font-medium text-sm xl:text-lg leading-none text-brand-primary-color-light">
          logout
        </span>
      </button>
    </div>
    // </div>
  );
};
