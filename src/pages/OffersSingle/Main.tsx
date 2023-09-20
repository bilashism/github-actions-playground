import { SubmitHandler, useForm } from 'react-hook-form';
import { BsArrowRight } from 'react-icons/bs';
import { TbClockHour4 } from 'react-icons/tb';

import { CartIcon, DottedChatIcon } from '../../components/icons/icons';
import { CurrencySymbol } from '../../components/ui/CurrencySymbol';
import { Money } from '../../components/ui/Money';
import { OfferLabel } from '../../components/ui/OfferLabel';
import {
  closeChatModal,
  openChatModal,
} from '../../redux/features/chat/chatSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { AddToCartButton } from './components/AddToCartButton';
import { OfferDetails } from './components/OfferDetails';
import { OfferFilterInputBox } from './components/OfferFilterInputBox';
import { ShowGameOffersCategories } from './components/ShowGameOffersCategories';
import { useSingleOfferContext } from '.';

type OfferFilterFormInputs = {
  region: string[];
  faction: string[];
  boostMethod: string[];
  executionOptions: string[];
  additionalOptions: string[];
  currentLevel: number;
  desiredLevel: number;
};

export const Main = () => {
  const { gameOffer } = useSingleOfferContext();
  const { isOpen } = useAppSelector((state) => state.chat);
  const { rate } = useAppSelector((state) => state.currency);
  const dispatch = useAppDispatch();

  const chatModalCloser = () => {
    dispatch(closeChatModal());
  };

  const chatModalOpener = () => {
    dispatch(openChatModal());
  };
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    reset,
    formState: { errors },
  } = useForm<OfferFilterFormInputs>();

  const onSubmit: SubmitHandler<OfferFilterFormInputs> = (data) => {
    console.log(data);
  };
  const handleGetValue = () => {
    const values = getValues();
    console.log(values);
  };

  if (!gameOffer) {
    return (
      <p className="text-red-500 text-center">No valid game offer found!</p>
    );
  }

  const { label, imageUrl } = gameOffer;
  return (
    <main className="relative isolate z-0 py-4 xl:py-4 grid gap-4 xl:grid-cols-[min(17rem,100%),1fr] items-start">
      <div className="fb-container xl:m-0 xl:row-span-full xl:col-span-full w-full xl:max-w-[17rem] xl:flex-shrink-0 xl:sticky xl:top-[97px] z-10 2xl:px-4">
        <ShowGameOffersCategories />
      </div>
      <div className="fb-container xl:row-span-full xl:col-span-full">
        <div className="pb-20 xl:ml-auto xl:max-w-[calc(100%-17rem)] 2xl:max-w-[calc(100%-10rem)] 3xl:max-w-none">
          <div className="grid md:grid-cols-[min(24rem,100%),1fr] gap-8 xl:gap-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* search filters */}
              <div className="max-w-sm mx-auto xl:mx-0 w-full grid gap-3 rounded-md py-4 xl:py-8 px-3 xl:px-6 border border-brand-primary-color-1/20 bg-brand-primary-color-1/[0.03]">
                {/* offer image  */}
                <figure className="grid relative isolate z-0 overflow-clip rounded-[.25rem] after:absolute after:inset-0 after:z-10 after:bg-[linear-gradient(0deg,theme(colors.black/.95)_10%,theme(colors.brand.black.120/.5)_60%)] after:pointer-events-none">
                  <picture className="row-span-full col-span-full z-0">
                    <source media="(min-width: 350px)" srcSet={imageUrl} />
                    <img
                      src={imageUrl}
                      alt="description"
                      className="w-full object-cover object-center"
                      loading="lazy"
                      width="342"
                      height="300"
                      decoding="async"
                      // fetchPriority="low"
                    />
                  </picture>
                  <OfferLabel
                    label={label}
                    className="row-span-full col-span-full justify-self-start mt-4 ml-4 z-30"
                  />
                </figure>
                {/* filter boxes - region */}
                <div className="flex flex-col gap-4 p-4 bg-brand-primary-color-1/[.04] rounded-[.25rem]">
                  <h3 className="capitalize text-base leading-none font-medium font-oxanium text-brand-black-10">
                    region
                  </h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap gap-3 py-1">
                      <OfferFilterInputBox label="EU">
                        <input
                          type="checkbox"
                          value="EU"
                          className="appearance-none sr-only peer"
                          {...register('region')}
                        />
                      </OfferFilterInputBox>
                    </div>
                    <div className="flex flex-wrap gap-3 py-1">
                      <OfferFilterInputBox label="US">
                        <input
                          type="checkbox"
                          value="US"
                          className="appearance-none sr-only peer"
                          {...register('region')}
                        />
                      </OfferFilterInputBox>
                    </div>
                  </div>
                </div>
                {/* filter boxes - faction */}
                <div className="flex flex-col gap-4 p-4 bg-brand-primary-color-1/[.04] rounded-[.25rem]">
                  <h3 className="capitalize text-base leading-none font-medium font-oxanium text-brand-black-10">
                    faction
                  </h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap gap-3 py-1">
                      <OfferFilterInputBox label="Horde">
                        <input
                          type="checkbox"
                          value="Horde"
                          className="appearance-none sr-only peer"
                          {...register('faction')}
                        />
                      </OfferFilterInputBox>
                    </div>
                    <div className="flex flex-wrap gap-3 py-1">
                      <OfferFilterInputBox label="Alliance">
                        <input
                          type="checkbox"
                          value="Alliance"
                          className="appearance-none sr-only peer"
                          {...register('faction')}
                        />
                      </OfferFilterInputBox>
                    </div>
                  </div>
                </div>
                {/* filter boxes - Boost Method */}
                <div className="flex flex-col gap-4 p-4 bg-brand-primary-color-1/[.04] rounded-[.25rem]">
                  <h3 className="capitalize text-base leading-none font-medium font-oxanium text-brand-black-10">
                    Boost Method
                  </h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap gap-3 py-1">
                      <OfferFilterInputBox label="AFK Self-play">
                        <input
                          type="checkbox"
                          value="AFK Self-play"
                          className="appearance-none sr-only peer"
                          {...register('boostMethod')}
                        />
                      </OfferFilterInputBox>
                    </div>
                    <div className="flex flex-wrap gap-3 py-1">
                      <OfferFilterInputBox label="Piloted">
                        <input
                          type="checkbox"
                          value="Piloted"
                          className="appearance-none sr-only peer"
                          {...register('boostMethod')}
                        />
                      </OfferFilterInputBox>
                    </div>
                    <div className="flex flex-wrap gap-3 py-1">
                      <OfferFilterInputBox label="Remote Control">
                        <input
                          type="checkbox"
                          value="Remote Control"
                          className="appearance-none sr-only peer"
                          {...register('boostMethod')}
                        />
                      </OfferFilterInputBox>
                    </div>
                  </div>
                </div>
                {/* filter boxes - level */}
                <div className="flex flex-col gap-4 p-4 bg-brand-primary-color-1/[.04] rounded-[.25rem]">
                  <div className="flex flex-row items-center gap-4 py-1">
                    <div className="flex flex-col gap-2 text-sm leading-none font-medium font-oxanium">
                      <label
                        htmlFor="currentLevel"
                        className="text-brand-black-10"
                      >
                        Your current lvl
                      </label>
                      <input
                        type="number"
                        id="currentLevel"
                        className="w-full bg-brand-primary-color-1 text-white px-4 py-2 rounded-[.25rem] placeholder:text-gray-500 outline-none"
                        min={0}
                        placeholder="15"
                        {...register('currentLevel', {
                          valueAsNumber: true,
                        })}
                      />
                    </div>
                    <BsArrowRight className="w-5 h-5 shrink-0" />
                    <div className="flex flex-col gap-2 text-sm leading-none font-medium font-oxanium">
                      <label
                        htmlFor="desiredLevel"
                        className="text-brand-black-10"
                      >
                        Level you want
                      </label>
                      <input
                        type="number"
                        id="desiredLevel"
                        className="w-full bg-brand-primary-color-1 text-white px-4 py-2 rounded-[.25rem] placeholder:text-gray-500 outline-none"
                        min={0}
                        placeholder="16"
                        {...register('desiredLevel', {
                          valueAsNumber: true,
                        })}
                      />
                    </div>
                  </div>
                </div>
                {/* filter boxes - Execution Options */}
                <div className="flex flex-col gap-4 p-4 bg-brand-primary-color-1/[.04] rounded-[.25rem]">
                  <h3 className="capitalize text-base leading-none font-medium font-oxanium text-brand-black-10">
                    Execution Options
                  </h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap gap-3 py-1">
                      <OfferFilterInputBox label="Normal">
                        <input
                          type="checkbox"
                          value="Normal"
                          className="appearance-none sr-only peer"
                          {...register('executionOptions')}
                        />
                      </OfferFilterInputBox>
                    </div>
                    <div className="flex flex-wrap gap-3 py-1">
                      <OfferFilterInputBox label="Express">
                        <input
                          type="checkbox"
                          value="Express"
                          className="appearance-none sr-only peer"
                          {...register('executionOptions')}
                        />
                        <span className="text-sm leading-none font-normal text-brand-black-20 font-oxanium order-last">
                          +<CurrencySymbol />
                          <Money value={1.87} />
                        </span>
                      </OfferFilterInputBox>
                    </div>
                    <div className="flex flex-wrap gap-3 py-1">
                      <OfferFilterInputBox label="Super Express">
                        <input
                          type="checkbox"
                          value="Super Express"
                          className="appearance-none sr-only peer"
                          {...register('executionOptions')}
                        />
                        <span className="text-sm leading-none font-normal text-brand-black-20 font-oxanium order-last">
                          +<CurrencySymbol />
                          <Money value={3.87} />
                        </span>
                      </OfferFilterInputBox>
                    </div>
                  </div>
                </div>
                {/* filter boxes - Additional Options */}
                <div className="flex flex-col gap-4 p-4 bg-brand-primary-color-1/[.04] rounded-[.25rem]">
                  <h3 className="capitalize text-base leading-none font-medium font-oxanium text-brand-black-10">
                    Additional Options
                  </h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap gap-3 py-1">
                      <OfferFilterInputBox label="Mythic +17 key">
                        <input
                          type="checkbox"
                          value="Mythic +17 key"
                          className="appearance-none sr-only peer"
                          {...register('additionalOptions')}
                        />
                        <span className="text-sm leading-none font-normal text-brand-black-20 font-oxanium order-last ml-auto shrink-0">
                          +<CurrencySymbol />
                          <Money value={13.27} />
                        </span>
                      </OfferFilterInputBox>
                    </div>
                    <div className="flex flex-wrap gap-3 py-1">
                      <OfferFilterInputBox label="Aberrus Heroic plus Normal">
                        <input
                          type="checkbox"
                          value="Aberrus Heroic plus Normal"
                          className="appearance-none sr-only peer"
                          {...register('additionalOptions')}
                        />
                        <span className="text-sm leading-none font-normal text-brand-black-20 font-oxanium order-last ml-auto shrink-0">
                          +<CurrencySymbol />
                          <Money value={12.87} />
                        </span>
                      </OfferFilterInputBox>
                    </div>
                    <div className="flex flex-wrap gap-3 py-1">
                      <OfferFilterInputBox label="Embers of Neltharion campaign">
                        <input
                          type="checkbox"
                          value="Embers of Neltharion campaign"
                          className="appearance-none sr-only peer"
                          {...register('additionalOptions')}
                        />
                        <span className="text-sm leading-none font-normal text-brand-black-20 font-oxanium order-last ml-auto shrink-0">
                          +<CurrencySymbol />
                          <Money value={51.21} />
                        </span>
                      </OfferFilterInputBox>
                    </div>
                    <div className="flex flex-wrap gap-3 py-1">
                      <OfferFilterInputBox label="Dragonriding full progress">
                        <input
                          type="checkbox"
                          value="Dragonriding full progress"
                          className="appearance-none sr-only peer"
                          {...register('additionalOptions')}
                        />
                        <span className="text-sm leading-none font-normal text-brand-black-20 font-oxanium order-last ml-auto shrink-0">
                          +<CurrencySymbol />
                          <Money value={10.07} />
                        </span>
                      </OfferFilterInputBox>
                    </div>
                  </div>
                </div>
                {/* filter boxes - actions */}
                <div className="flex flex-col gap-4 p-4 bg-brand-primary-color-1/[.04] rounded-[.25rem]">
                  <div className="flex flex-col py-1 gap-6">
                    <div className="flex flex-col gap-2">
                      <span className="text-lg xl:text-2xl leading-none font-medium text-white font-oxanium">
                        <CurrencySymbol /> <Money value={9.96} />
                      </span>
                      <p className="flex items-end flex-wrap gap-2 text-sm leading-none font-normal text-brand-black-20 font-oxanium">
                        <TbClockHour4 className="w-4 h-4" />
                        <span className="">2 hours order completion</span>
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                      <AddToCartButton>
                        <div className="w-full flex justify-center items-center gap-2 capitalize text-sm leading-none font-medium text-white font-oxanium group bg-brand-primary-color-1 hover:bg-brand-primary-color-light transition-colors px-4 xl:px-8 py-1 xl:py-2.5 rounded-[.25rem]">
                          <CartIcon className="group-hover:text-brand-primary-color-1 transition-colors" />
                          <span className="group-hover:text-brand-primary-color-1 transition-colors">
                            add to cart
                          </span>
                        </div>
                      </AddToCartButton>

                      <button
                        type="button"
                        className="flex grow justify-center items-center gap-2 group px-4 xl:px-8 py-1 xl:py-2.5 rounded-[.25rem] border border-brand-primary-color-1/50 hover:border-brand-primary-color-1 transition-colors"
                        onClick={chatModalOpener}
                      >
                        <DottedChatIcon className="group-hover:text-brand-primary-color-1 w-5 h-5" />
                        <span className="capitalize text-sm leading-none font-medium text-white font-oxanium  transition-colors group-hover:text-brand-primary-color-1">
                          chat
                        </span>
                      </button>

                      {/* <ChatButton>
                        <div className="w-full flex justify-center items-center gap-2 group px-4 xl:px-8 py-1 xl:py-2.5 rounded-[.25rem] border border-brand-primary-color-1/50 hover:border-brand-primary-color-1 transition-colors">
                          <MessageIcon className="group-hover:text-brand-primary-color-1 w-5 h-5" />
                          <span className="capitalize text-sm leading-none font-medium text-white font-oxanium  transition-colors group-hover:text-brand-primary-color-1">
                            chat
                          </span>
                        </div>
                      </ChatButton> */}
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {/* offer details */}
            <div className="grow">
              <OfferDetails />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
