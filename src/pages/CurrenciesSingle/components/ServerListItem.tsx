import { useState } from 'react';

import { CurrencySymbol } from '../../../components/ui/CurrencySymbol';
import { GradientBordered } from '../../../components/ui/GradientBordered';
import { GradientShapeShifter } from '../../../components/ui/GradientShapeShifter';
import { Money } from '../../../components/ui/Money';
import { lazilyLoadable } from '../../../utils/lazilyLoadable';
import { twMergeClsx } from '../../../utils/twMergeClsx';
import {
  CurrencyServerCoin,
  CurrencyServerGold,
  TCurrencyServer,
} from '../../Currencies';
import { SlashedMetaInfo } from '../../Orders/components/SlashedMetaInfo';

import 'react-responsive-modal/styles.css';

const { ServerDetails } = lazilyLoadable(() => import('./ServerDetails'));
const { Modal } = lazilyLoadable(() => import('react-responsive-modal'));

type Props = {
  currencyName: string;
  server: TCurrencyServer;
};

export const isCurrencyServerGold = (
  server: TCurrencyServer
): server is CurrencyServerGold => {
  return (server as CurrencyServerGold).faction !== undefined;
};
export const isCurrencyServerCoin = (
  server: TCurrencyServer
): server is CurrencyServerCoin => {
  return (server as CurrencyServerCoin).console !== undefined;
};

export const ServerListItem = ({ server, currencyName }: Props) => {
  const {
    inStock,
    uid,
    deliveryTime,
    price,
    rating,
    currencyUid,
    name,
    reviewCount: review,
    quantity,
  } = server;

  const [openServerDetailsModal, setOpenServerDetailsModal] =
    useState<boolean>(false);
  const onOpenServerDetailsModal = () => setOpenServerDetailsModal(true);
  const onCloseServerDetailsModal = () => setOpenServerDetailsModal(false);

  // console.log(server);

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-5 lg:gap-1 xl:gap-1 justify-center xl:justify-between">
      <GradientShapeShifter>
        <div className="relative h-full w-full z-10 py-2 px-1 xl:pl-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 px-5 py-2 xl:pl-6 xl:pr-3 xl:py-0 h-full w-full">
            <div className="flex grow gap-3 items-center w-full lg:w-auto ">
              <figure className="shrink-0">
                <picture className="inline-flex justify-center items-center">
                  <source media="(min-width: 350px)" srcSet="/favicon.svg" />
                  <img
                    src="/favicon.svg"
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
              <button
                type="button"
                onClick={onOpenServerDetailsModal}
                className="flex-grow text-start pt-[.375rem] font-oxanium font-medium text-lg leading-none"
              >
                {name}
              </button>
            </div>

            <SlashedMetaInfo
              title={`${currencyName}${
                isCurrencyServerCoin(server) && inStock >= 2 ? 's' : ''
              } in stock`}
            >
              {inStock}
            </SlashedMetaInfo>

            {isCurrencyServerGold(server) && (
              <SlashedMetaInfo title="faction">
                <span
                  className={twMergeClsx(
                    `${
                      server.faction === 'horde'
                        ? 'text-brand-primary-color-1'
                        : 'text-blue-800'
                    }`
                  )}
                >
                  {server.faction}
                </span>
              </SlashedMetaInfo>
            )}

            {isCurrencyServerCoin(server) && (
              <SlashedMetaInfo title="console">
                <span className="text-brand-primary-color-1">
                  {server.console}
                </span>
              </SlashedMetaInfo>
            )}

            <SlashedMetaInfo title="Delivery Time">
              <span className="text-brand-green-850">{deliveryTime}</span>
            </SlashedMetaInfo>

            <SlashedMetaInfo title="review">
              {/* <ColoredStatusText value="djhfg" /> */}
              {review}
            </SlashedMetaInfo>

            <SlashedMetaInfo title="rating">{rating}</SlashedMetaInfo>

            <SlashedMetaInfo title="price">
              <span className="text-brand-primary-color-1 font-semibold">
                <CurrencySymbol className="inline-flex justify-center w-3" />
                <Money value={price} />{' '}
                <span className="text-white text-xs leading-none font-normal">
                  for {quantity} {currencyName}
                  {isCurrencyServerCoin(server) ? 's' : ''}
                </span>
              </span>
            </SlashedMetaInfo>
          </div>
        </div>
      </GradientShapeShifter>

      <Modal
        open={openServerDetailsModal}
        onClose={onCloseServerDetailsModal}
        showCloseIcon={false}
        closeOnOverlayClick
        classNames={{
          overlay: 'backdrop-blur-lg overflow-auto',
          modalContainer: 'grid place-items-center',
          modal:
            'px-0 py-4 !my-0 mx-auto bg-transparent shadow-none !overflow-y-clip !max-w-none',
        }}
      >
        <GradientBordered className="rounded-[1.25rem] before:rounded-[1.25rem] before:bg-gradient-bordered-light bg-gradient-to-b from-black/80 w-[calc(100vw-2rem)] max-w-6xl mx-auto grid gap-5 p-3 xl:p-8">
          <div className="flex justify-end absolute w-full h-auto right-4 top-2">
            <button
              type="button"
              onClick={onCloseServerDetailsModal}
              className="ml-auto inline-flex justify-center items-center fill-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
              >
                <path
                  fillRule="evenodd"
                  d="M6.148 4.852a.917.917 0 1 0-1.296 1.296L9.704 11l-4.852 4.852a.917.917 0 1 0 1.296 1.296L11 12.296l4.852 4.852a.917.917 0 0 0 1.296-1.296L12.296 11l4.852-4.852a.917.917 0 1 0-1.296-1.296L11 9.704 6.148 4.852Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {openServerDetailsModal ? (
            <ServerDetails server={server} currencyName={currencyName} />
          ) : (
            false
          )}
        </GradientBordered>
      </Modal>
    </div>
  );
};
