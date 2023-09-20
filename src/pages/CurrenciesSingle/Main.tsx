/* eslint-disable react/button-has-type */
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoIosSearch } from 'react-icons/io';

import { Dropdown } from '../../components/ui/Dropdown';
import { GradientFadePrimaryHr } from '../../components/ui/GradientFadePrimaryHr';

import { ServerListItem } from './components/ServerListItem';
import { ThemeRadioInputBox } from './components/ThemeRadioInputBox';
import { useSingleCurrencyContext } from '.';

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
  const { gameCurrency, gameName } = useSingleCurrencyContext();

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

  const { name, gameUid, filters, servers } = gameCurrency;

  // console.log(filters);
  const serverOptions = [...servers.map((server) => server.name)];
  const handleServerSelect = (value: string) => {
    console.log(`Selected state: ${value}`);
  };

  const sortOptions = ['Featured', 'Created AI', 'Price', 'Duration'];
  const handleSortSelect = (value: string) => {
    console.log(`Selected sort: ${value}`);
  };

  return (
    <main className="relative isolate z-0 py-4 xl:py-4">
      <div className="fb-container grid gap-8">
        <div className="grid gap-8 xl:gap-12">
          {/* details  */}
          <div className="grid gap-5 font-tti-regular text-sm xl:text-lg leading-normal text-brand-black-20">
            <div className="grid gap-3">
              <h1 className="text-brand-primary-color-1">
                {gameName} {name}
              </h1>
              <GradientFadePrimaryHr />
            </div>
            <div className="grid gap-5">
              <p className="">
                <strong className="font-normal text-brand-primary-color-1">
                  {gameName} {name}
                </strong>{' '}
                in Dragonflight is still the most important currency, which
                provides you with a lot of opportunities. For Gold, you can buy
                mounts, pets, transmog items, and, what is more important,
                consumables for any content, and even{' '}
                <strong className="font-normal text-brand-primary-color-1">
                  Mythic raid gear.
                </strong>
              </p>
              <p className="">
                FullBoosts can provide you with{' '}
                <strong className="font-normal text-brand-primary-color-1">
                  any amount of Gold you need.
                </strong>{' '}
                In most cases,{' '}
                <strong className="font-normal text-brand-primary-color-1">
                  delivery time is less than 15 minutes,
                </strong>{' '}
                but it depends on the server and can vary. Player-to-player
                trades without any intermediaries don&apos;t take much of your
                time, so you can get Gold almost doesn&apos;t stop your daily
                WoW routine.
              </p>
              <p className="">
                Note: Don&apos;t give your gold back to anybody. Nobody but
                scammers would ask you to do that. If these rules are not
                followed, you assume all risks.
              </p>
            </div>
          </div>
          {/* filters  */}
          <div className="grid gap-4 xl:gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* search filters */}
              <div className="w-full h-full flex items-center flex-wrap gap-4 xl:gap-6">
                {/* filter boxes */}
                {filters?.map((filter) => (
                  <ThemeRadioInputBox key={filter.id} data={filter} />
                ))}

                {/* select server dropdown  */}
                <div className="w-56 max-w-full">
                  <Dropdown
                    heightClassName="h-auto"
                    leftIcon={<IoIosSearch className="w-5 h-5 shrink-0" />}
                    defaultLabel="Find your server"
                    selectHandler={handleServerSelect}
                    options={serverOptions}
                    className="bg-brand-primary-color-1/[.03] h-full text-sm xl:text-base leading-none font-tti-medium font-medium text-brand-black-20"
                  />
                </div>
                <ThemeRadioInputBox
                  data={{
                    id: 'currency-status',
                    isMultiSelect: false,
                    name: 'currency-status',
                    options: ['offline', 'online'],
                  }}
                />
                <div className="xl:ml-auto">
                  <button
                    type="reset"
                    className="text-sm xl:text-base leading-none font-tti-medium font-medium text-brand-black-20 bg-brand-primary-color-1/[.03] p-2 border border-brand-primary-color-1 rounded-md capitalize"
                  >
                    reset filters
                  </button>
                </div>
              </div>
            </form>
            <GradientFadePrimaryHr />
            {/* sort dropdown  */}
            <div className="xl:pt-6 xl:justify-self-end w-56 xl:w-40 max-w-full">
              <Dropdown
                defaultLabel="sort by"
                selectHandler={handleSortSelect}
                options={sortOptions}
                className="bg-brand-primary-color-1/[.03]"
              />
            </div>
          </div>
        </div>

        {/* server list  */}
        <div className="p-4 xl:p-7 bg-brand-primary-color-1/[.03] rounded-xl">
          <div className="w-full h-full max-h-[25rem] overflow-auto minimal-scrollbar p-1 grid gap-4 xl:gap-7">
            {servers?.map((server) => (
              <ServerListItem
                key={server.id}
                currencyName={name}
                server={server}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
