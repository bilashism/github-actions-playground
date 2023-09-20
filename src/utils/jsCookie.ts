import JS_COOKIE from 'js-cookie';

export const jsCookie = JS_COOKIE;

export const COOKIES = {
  ACCESS_TOKEN: 'accessToken',
  ROLE: 'role',
} as const;

export type TCookie = (typeof COOKIES)[keyof typeof COOKIES];
