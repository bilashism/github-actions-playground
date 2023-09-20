export const ORDER_STATUS = {
  PLACED: 'placed',
  PROCESSING: 'processing',
  CONFIRMED: 'confirmed',
  COMPLETED: 'completed',
} as const;

export type OrderStatus = (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS];

export const TWITTER_CARD_TYPES = {
  SUMMARY: 'summary',
  SUMMARY_LARGE_IMAGE: 'summary_large_image',
  PLAYER: 'player',
  PRODUCT: 'product',
  GALLERY: 'gallery',
  APP: 'app',
  APP_IMAGE: 'app:image',
  APP_VIDEO: 'app:video',
  APP_AUDIO: 'app:audio',
} as const;
export type TwitterCardType =
  (typeof TWITTER_CARD_TYPES)[keyof typeof TWITTER_CARD_TYPES];

export const OG_TYPES = {
  WEBSITE: 'website',
  ARTICLE: 'article',
  BLOG: 'blog',
  PROFILE: 'profile',
  PRODUCT: 'product',
  VIDEO: 'video',
  MUSIC: 'music',
  PLACE: 'place',
  APP: 'app',
  EVENT: 'event',
  BOOK: 'book',
} as const;

export type OGType = (typeof OG_TYPES)[keyof typeof OG_TYPES];

export const SITE_INFO = {
  name: {
    normalized: 'Fullboosts',
    capitalized: 'FullBoosts',
    short: 'FB',
  },
  url: new URL('https://fullboosts.com'),
} as const;
