import { useParams } from 'react-router-dom';

import { CurrencySymbol } from '../../components/ui/CurrencySymbol';
import { GradientBordered } from '../../components/ui/GradientBordered';
import { Money } from '../../components/ui/Money';
import { ORDER_STATUS } from '../../enums';
import { ORDERS_DATA } from '../Orders/Main';

import { CompletedCard } from './components/CompletedCard';
import { ConfirmationCard } from './components/ConfirmationCard';
import { ConfirmDeliveryCard } from './components/ConfirmDeliveryCard';
import { InProgressCard } from './components/InProgressCard';
import { JoinGroupChatCard } from './components/JoinGroupChatCard';
import { JoinServerCard } from './components/JoinServerCard';
import { OrderDetailsMetaInfo } from './components/OrderDetailsMetaInfo';
import { PlacedCard } from './components/PlacedCard';

export const Main = () => {
  const { uid } = useParams<{ uid: string }>();

  if (!uid) {
    return <p className="text-red-500 text-center">No valid order ID found!</p>;
  }

  const order = ORDERS_DATA?.find((item) => item?.uid === uid);

  if (!order) {
    return <p className="text-red-500 text-center">No order found!</p>;
  }

  const { status } = order;

  return (
    <main className="relative isolate z-0 py-4 xl:py-4">
      <div className="fb-container">
        <div className="pb-20">
          <div>
            <div className="relative isolate z-0 flex justify-between items-center gap-2 xl:gap-4 xl:px-4 border-b border-brand-black-90 font-oxanium text-sm xl:text-base leading-none font-medium">
              {Object.values(ORDER_STATUS).map((label, idx) => (
                <span
                  key={`order-details-tab-${idx + 1}`}
                  className={`relative isolate z-0 outline-none pb-3 line-clamp-1 inline-flex justify-center text-center xl:min-w-[7rem] transition-all capitalize ${
                    status === label
                      ? 'before:absolute before:w-full before:h-[2px] before:left-0 before:bottom-0 before:bg-brand-primary-color-1 before:rounded-t-lg text-brand-primary-color-1'
                      : 'text-white'
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="grid xl:grid-cols-[1fr_min(26rem,100%)] items-start gap-8 pt-6">
              <div className="w-full flex flex-wrap gap-8">
                {/* tab panels */}
                <div className="w-full">
                  <GradientBordered className="rounded-[1.25rem] before:rounded-[1.25rem] before:bg-gradient-bordered-light p-9 bg-multi-gradient-1">
                    {status === ORDER_STATUS.PLACED ? <PlacedCard /> : false}
                    {status === ORDER_STATUS.COMPLETED ? (
                      <CompletedCard />
                    ) : (
                      false
                    )}
                    {status === ORDER_STATUS.CONFIRMED ? (
                      <ConfirmationCard />
                    ) : (
                      false
                    )}
                    {status === ORDER_STATUS.PROCESSING ? (
                      <InProgressCard />
                    ) : (
                      false
                    )}
                  </GradientBordered>
                </div>
                {/* details  */}
                <div className="w-full">
                  <div className="w-full flex flex-col gap-8">
                    {/* Delivery details */}
                    <GradientBordered className="rounded-[1.25rem] before:rounded-[1.25rem] before:bg-gradient-bordered-light p-9 bg-multi-gradient-1">
                      <div className="flex flex-col items-start gap-8">
                        <h2 className="capitalize font-tti-demi-bold font-semibold text-[clamp(1.5rem,4vw,2rem)] leading-none text-white">
                          Delivery details
                        </h2>

                        <div className="w-full grid xl:grid-cols-2 items-start gap-5">
                          <OrderDetailsMetaInfo
                            label="Server Name"
                            value="Linksys EA4500"
                          />
                          <OrderDetailsMetaInfo label="Faction" value="Harde" />
                        </div>
                        <div className="w-full grid items-start gap-5">
                          <OrderDetailsMetaInfo
                            label="Character Name"
                            value="Donkey Kong"
                          />
                          <p className="font-tti-regular text-sm leading-relaxed text-brand-black-5 font-normal">
                            If you’d like to change this, please contact the
                            seller in the chat window and provide the new
                            delivery details.
                          </p>
                        </div>
                      </div>
                    </GradientBordered>

                    {/* Order info */}
                    <GradientBordered className="rounded-[1.25rem] before:rounded-[1.25rem] before:bg-gradient-bordered-light p-9 bg-multi-gradient-1">
                      <div className="flex flex-col items-start gap-8">
                        <h2 className="capitalize font-tti-demi-bold font-semibold text-[clamp(1.5rem,4vw,2rem)] leading-none text-white">
                          Order info
                        </h2>

                        <div className="w-full grid xl:grid-cols-2 items-start gap-5">
                          <OrderDetailsMetaInfo
                            label="Game"
                            value="World of Warcraft"
                          />
                          <OrderDetailsMetaInfo label="Category" value="Gold" />
                        </div>
                        <div className="w-full grid xl:grid-cols-2 items-start gap-5">
                          <OrderDetailsMetaInfo
                            label="Quantity"
                            value="300,000"
                          />
                          <OrderDetailsMetaInfo
                            label="Created"
                            value="24 Jun, 18:47 (GMT+4)"
                          />
                        </div>
                        <div className="w-full grid xl:grid-cols-2 items-start gap-5">
                          <OrderDetailsMetaInfo
                            label="Seller Online"
                            value="Yes"
                          />
                          <OrderDetailsMetaInfo
                            label="Order Completion Time"
                            value="15 Minutes"
                          />
                        </div>
                        <div className="w-full grid items-start gap-5">
                          <OrderDetailsMetaInfo
                            label="Total Price"
                            value={
                              <>
                                <CurrencySymbol />
                                <Money value={10.87} />
                              </>
                            }
                          />
                        </div>
                      </div>
                    </GradientBordered>
                  </div>
                </div>
              </div>
              <aside className="w-full grid lg:grid-cols-3 xl:grid-cols-1 items-start gap-8 xl:gap-4">
                <ConfirmDeliveryCard />
                <JoinGroupChatCard />
                <JoinServerCard />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
