import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Select, { SingleValue } from 'react-select';

import { LatestOffersButton } from '../../../components/ui/LatestOffersButton';
import { FEATURED_GAMES_DATA } from '../../Home/FeaturedGames';

import { IGamesAndCategories } from './GameOffers';
// import { IGamesAndCategories } from '../../Home/LatestGamesOffers';

export const ShowGameOffersCategories = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [gamesAndCategories, setGamesAndCategories] = useState<string[]>();

  const { uid } = useParams<{ uid: string }>();
  const selectOptions = gamesAndCategories?.map((item) => ({
    value: item,
    label: item,
  }));

  const handleTypeSelect = (
    e: SingleValue<{ value: string; label: string }>
  ) => {
    if (!e) return;
    setSelectedOption(e.value);
  };

  useEffect(() => {
    if (
      gamesAndCategories?.length === undefined ||
      gamesAndCategories?.length === 0
    ) {
      fetch('/data/gamesAndCategories.json')
        .then((res) => res.json())
        .then((data: IGamesAndCategories[]) => {
          const validData = data.find((item) => item.uid === uid)
            ?.categories as string[];
          // if (!validData) return;
          // console.log(data, uid);
          setGamesAndCategories(validData);
        })
        .catch(console.error);
    }
  }, [gamesAndCategories?.length, uid]);

  // console.log(selectedOption);

  return (
    <div className="">
      <div className="relative isolate z-10 w-full xl:hidden">
        <h2 className="font-bold font-tti-bold text-lg pb-4 text-center">
          Select a game category
        </h2>
        <Select
          theme={(theme) => ({
            ...theme,
            borderRadius: 6,
            colors: {
              ...theme.colors,
              primary25: 'rgba(235, 221, 208, 1)',
              primary: 'rgba(241, 99, 52, 1)',
            },
          })}
          value={selectOptions?.filter((option) => {
            return option.value === selectedOption;
          })}
          options={selectOptions}
          onChange={handleTypeSelect}
          className="text-black"
          classNamePrefix="offers-react-select"
        />
      </div>
      <div className="hidden xl:flex xl:flex-col">
        <button
          type="button"
          className="inline-flex w-full h-full flex-col justify-center items-center gap-2 px-4 xl:px-5 py-px font-tti-medium font-medium text-lg my-4 leading-none text-brand-primary-color-1 uppercase transition-colors"
        >
          <span className="">
            {FEATURED_GAMES_DATA?.find((item) => item.uid === uid)?.title}
          </span>
        </button>
        <div className="h-px w-full bg-fading-theme-gradient-25 " />
        {gamesAndCategories?.map((item) => (
          <LatestOffersButton
            key={item}
            buttonData={{ name: item, id: item, categories: [''], uid: '' }}
            selectedOption={selectedOption}
            setSelectedGame={setSelectedOption}
          />
        ))}
      </div>
    </div>
  );
};
