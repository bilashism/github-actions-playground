import { Link } from 'react-router-dom';

import footerLogoSrc from '../../assets/images/logo.svg';
import amexSrc from '../../assets/images/payment-icons-amex.svg';
import googleSrc from '../../assets/images/payment-icons-google.svg';
import mastercardSrc from '../../assets/images/payment-icons-mastercard.svg';
import payoneerSrc from '../../assets/images/payment-icons-payoneer.svg';
import visaSrc from '../../assets/images/payment-icons-visa.svg';
import { NewsletterForm } from '../../components/ui/NewsletterForm';
import { ROUTE_PARAM, ROUTER_PATH, RouterPath } from '../../enums/router-path';
import { useGamesAndCategories } from '../../hooks/useGamesAndCategories';

export const ACCEPTED_PAYMENT_METHODS_LOGOS_SOURCES: string[] = [
  amexSrc,
  googleSrc,
  mastercardSrc,
  payoneerSrc,
  visaSrc,
];
export type TopLevelLinkItem = {
  to: RouterPath;
  label: string;
};
export const FULLBOOSTS_LINKS: TopLevelLinkItem[] = [
  { to: ROUTER_PATH.ABOUT_US, label: 'About us' },
  { to: ROUTER_PATH.WORK_WITH_US, label: 'Work with us' },
  { to: ROUTER_PATH.GUIDES, label: 'Guides' },
  { to: ROUTER_PATH.CONTACT_US, label: 'Contact us' },
  { to: ROUTER_PATH.SUPPORT, label: 'Get help' },
];
export const LEGAL_LINKS: TopLevelLinkItem[] = [
  { to: ROUTER_PATH.TERMS_OF_SERVICE, label: 'Terms and conditions' },
  { to: ROUTER_PATH.PRIVACY_POLICY, label: 'Privacy policy' },
  { to: ROUTER_PATH.REFUND_POLICY, label: 'Refund policy' },
  { to: ROUTER_PATH.COOKIE_POLICY, label: 'Cookies policy' },
  { to: ROUTER_PATH.CREDENTIAL_ON_FILE, label: 'Credential on file agreement' },
];

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const { gamesAndCategories } = useGamesAndCategories();

  return (
    <footer className="py-10 xl:py-20 relative isolate z-0 overflow-clip self-end">
      <div className="fb-container">
        <div className="grid grid-cols-12 md:grid-cols-12 xl:grid-cols-12 justify-between items-start gap-x-4 gap-y-10 xl:gap-4">
          <div className="col-span-12 xl:col-span-4">
            <figure className="pb-5 xl:pb-8 text-center xl:text-start">
              <Link to={ROUTER_PATH.ROOT}>
                <picture className="">
                  <source media="(min-width: 350px)" srcSet={footerLogoSrc} />
                  <img
                    src={footerLogoSrc}
                    alt="description"
                    className="object-cover inline-flex"
                    loading="lazy"
                    width="178"
                    height="32"
                    decoding="async"
                    // fetchPriority="low"
                  />
                </picture>
              </Link>
            </figure>
            <div className="flex flex-col items-center xl:items-start">
              <h5 className="font-tti-demi-bold font-semibold text-xl leading-none text-brand-black-10 pb-4">
                Don’t miss our latest news
              </h5>
              <div className="max-w-sm">
                <NewsletterForm />
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-3 xl:col-span-2 font-oxanium text-base leading-none font-normal text-brand-black-10">
            <h5 className="pb-9 capitalize text-white font-tti-demi-bold font-semibold text-xl">
              FullBoosts
            </h5>
            <div className="flex flex-wrap gap-3 xl:gap-8 justify-between items-start">
              <div className="flex flex-col gap-3">
                {FULLBOOSTS_LINKS?.map(({ to, label }) => (
                  <Link
                    key={crypto.randomUUID().toString()}
                    to={to}
                    className="align-start hover:underline hover:underline-offset-4 hover:text-brand-primary-color-1 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-3 sm:justify-self-end xl:col-span-2 font-oxanium text-base leading-none font-normal text-brand-black-10">
            <h5 className="pb-9 capitalize text-white font-tti-demi-bold font-semibold text-xl">
              Legal
            </h5>
            <div className="flex flex-wrap gap-3 xl:gap-8 justify-between items-start">
              <div className="flex flex-col gap-3">
                {LEGAL_LINKS?.map(({ to, label }) => (
                  <Link
                    key={crypto.randomUUID().toString()}
                    to={to}
                    className="align-start hover:underline hover:underline-offset-4 hover:text-brand-primary-color-1 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-4 xl:pl-4 font-oxanium text-base leading-none font-normal text-brand-black-10">
            <h5 className="pb-9 capitalize text-white font-tti-demi-bold font-semibold text-xl">
              Games
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xl:gap-x-7 2xl:gap-x-8 justify-between items-start">
              {gamesAndCategories?.length
                ? gamesAndCategories.map((item) => (
                    <Link
                      key={item.id}
                      to={ROUTER_PATH.GAMES_SINGLE.replace(
                        ROUTE_PARAM.UID,
                        item.uid
                      )}
                      className="align-start hover:underline hover:underline-offset-4 hover:text-brand-primary-color-1 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-b-0 border-x-0 border-brand-black-90 my-8" />
      <div className="fb-container">
        <div className="flex flex-wrap justify-between items-center gap-8 lg:gap-4">
          <p className="text-center lg:text-start xl:text-start flex-grow text-brand-black-50 font-oxanium font-normal text-base leading-none">
            © Gamia 2018-{year}. All rights reserved.
          </p>
          <figure className="flex flex-wrap gap-4 items-center justify-center lg:justify-end xl:justify-end flex-grow">
            {ACCEPTED_PAYMENT_METHODS_LOGOS_SOURCES.map((src) => (
              <img
                key={crypto.randomUUID().toString()}
                src={src}
                alt="description"
                className="w-9 xl:w-auto h-7 xl:h-auto"
                loading="lazy"
                width="46"
                height="32"
                decoding="async"
                // fetchPriority="low"
              />
            ))}
          </figure>
        </div>
      </div>
      <figure className="absolute -z-10 w-[28rem] aspect-square -right-64 -bottom-40 blur-[6rem] rounded-circle bg-brand-blue-550/10" />
    </footer>
  );
};
