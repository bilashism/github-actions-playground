import { useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';

import { IGamesAndCategories } from '../../pages/GamesSingle/components/GameOffers';

import { LatestOffersButton } from './LatestOffersButton';

export const ShowLatestOfferGames = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [gamesAndCategories, setGamesAndCategories] =
    useState<IGamesAndCategories[]>();

  const selectOptions = gamesAndCategories?.map((item) => ({
    value: item?.id,
    label: item?.name,
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
          // console.log(data);
          setGamesAndCategories(data);
        })
        .catch(console.error);
    }
  }, [gamesAndCategories?.length]);

  // console.log(selectedOption);

  return (
    <div className="">
      <div className="relative isolate z-10 w-full xl:hidden">
        <h2 className="font-bold font-tti-bold text-lg pb-4 text-center">
          Select your game
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
        <div className="h-px w-full bg-fading-theme-gradient-25 " />
        {gamesAndCategories?.map((item) => (
          <LatestOffersButton
            key={item.id}
            buttonData={item}
            selectedOption={selectedOption}
            setSelectedGame={setSelectedOption}
          />
        ))}
      </div>
    </div>
  );
};
