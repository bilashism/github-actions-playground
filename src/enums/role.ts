export const ROLES = {
  OWNER: 'owner',
  ADMIN: 'admin',
  SUPPORT: 'support',
  PARTNER: 'partner',
  CUSTOMER: 'customer',
  VISITOR: 'visitor',
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
export type ExcludedVisitorRole = Exclude<Role, 'visitor'>;
