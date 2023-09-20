import { PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';

import { OG_TYPES, SITE_INFO, TwitterCardType } from '../enums';

type TExtendHead = {
  title: string;
  description: string;
  twitterCardType?: TwitterCardType;
  statusBarColor?: string;
} & PropsWithChildren;

export const ExtendHead = ({
  title,
  description,
  statusBarColor,
  twitterCardType,
  children,
}: TExtendHead) => {
  return (
    <Helmet
      titleTemplate={`%s ${title.trim() ? '-' : ''} ${
        SITE_INFO.name.capitalized
      }`}
    >
      {/* Standard metadata tags */}
      <title>{title.trim()}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta itemProp="name" content={description} />
      <link rel="canonical" href={SITE_INFO.url.href} />
      <link rel="alternate" hrefLang="en" href={SITE_INFO.url.href} />
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:locale" content="en" />
      <meta property="og:type" content={twitterCardType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={SITE_INFO.name.capitalized} />
      <meta property="og:type" content={OG_TYPES.WEBSITE} />
      <meta property="og:url" content={SITE_INFO.url.href} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:card" content={twitterCardType} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}

      {/* status bar color */}
      <meta name="theme-color" content={statusBarColor} />
      <meta name="msapplication-navbutton-color" content={statusBarColor} />
      <meta name="msapplication-TileColor" content={statusBarColor} />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content={statusBarColor}
      />
      <meta name="apple-mobile-web-app-status-bar" content={statusBarColor} />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content={statusBarColor}
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content={statusBarColor}
      />
      {/* end status bar color */}
      {children}
    </Helmet>
  );
};

ExtendHead.defaultProps = {
  statusBarColor: '#f16334',
  twitterCardType: 'summary',
} as const;
