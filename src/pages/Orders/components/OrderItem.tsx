import { Link } from 'react-router-dom';

import { ColoredStatusText } from '../../../components/ui/ColoredStatusText';
import { CurrencySymbol } from '../../../components/ui/CurrencySymbol';
import { GradientShapeShifter } from '../../../components/ui/GradientShapeShifter';
import { Money } from '../../../components/ui/Money';
import { OrderStatus } from '../../../enums';
import { ROUTE_PARAM, ROUTER_PATH } from '../../../enums/router-path';
import useMatchMedia, { LARGE_SCREEN } from '../../../hooks/useMatchMedia';

import { SlashedMetaInfo } from './SlashedMetaInfo';

export type Order = {
  id: string;
  uid: string;
  title: string;
  date: string;
  reviewCount: number;
  rating: number;
  status: OrderStatus;
  price: number;
  imageUrl: string;
};
type OrderProps = {
  order: Order;
};
export const OrderItem = ({ order }: OrderProps) => {
  const isLargeScreen = useMatchMedia(LARGE_SCREEN);

  const { id, uid, date, imageUrl, price, rating, reviewCount, status, title } =
    order;

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-5 lg:gap-1 xl:gap-1 justify-center xl:justify-between">
      {isLargeScreen ? (
        <figure className="shrink-0 flex items-center">
          <Link
            to={ROUTER_PATH.ORDERS_SINGLE.replace(ROUTE_PARAM.UID, uid)}
            className="inline-flex items-center"
          >
            <picture className="inline-flex items-center">
              <source media="(min-width: 350px)" srcSet={imageUrl} />
              <img
                src={imageUrl}
                alt="description"
                className="inline-flex w-36 h-16"
                loading="lazy"
                width="144"
                height="64"
                decoding="async"
                // fetchPriority="low"
              />
            </picture>
          </Link>
        </figure>
      ) : (
        false
      )}

      <GradientShapeShifter>
        <div className="relative h-full w-full z-10">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 px-5 py-2 xl:pl-6 xl:pr-3 xl:py-0 h-full w-full">
            <div className="flex grow gap-3 items-center w-full lg:w-auto ">
              <figure className="shrink-0">
                <picture className="inline-flex justify-center items-center">
                  <source media="(min-width: 350px)" srcSet="favicon.svg" />
                  <img
                    src="favicon.svg"
                    alt="description"
                    className="inline-flex w-6 h-7"
                    loading="lazy"
                    width="24"
                    height="28"
                    decoding="async"
                    // fetchPriority="low"
                  />
                </picture>
              </figure>
              <span className="flex-grow pt-[.375rem] font-oxanium font-medium text-lg leading-none">
                <Link
                  to={ROUTER_PATH.ORDERS_SINGLE.replace(ROUTE_PARAM.UID, uid)}
                  className="flex hover:text-brand-primary-color-1 transition-colors"
                >
                  {title}
                </Link>
              </span>
            </div>
            <SlashedMetaInfo title="date">{date}</SlashedMetaInfo>

            <SlashedMetaInfo title="status">
              <ColoredStatusText value={status} />
            </SlashedMetaInfo>

            <SlashedMetaInfo title="review">{reviewCount}</SlashedMetaInfo>
            <SlashedMetaInfo title="rating">{rating}</SlashedMetaInfo>
            <SlashedMetaInfo title="price">
              <span className="text-brand-primary-color-1 font-semibold">
                <CurrencySymbol />
                <Money value={price} />
              </span>
            </SlashedMetaInfo>
          </div>
        </div>
      </GradientShapeShifter>
    </div>
  );
};
