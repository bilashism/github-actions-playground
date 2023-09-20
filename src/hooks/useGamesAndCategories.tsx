import axios from 'axios';
import { useEffect, useState } from 'react';

import { IGamesAndCategories } from '../pages/GamesSingle/components/GameOffers';

export const useGamesAndCategories = () => {
  const [gamesAndCategories, setGamesAndCategories] = useState<
    IGamesAndCategories[]
  >([]);

  useEffect(() => {
    if (!gamesAndCategories?.length) {
      axios
        .get('/data/gamesAndCategories.json')
        .then((data) => {
          setGamesAndCategories(data.data);
        })
        .catch(console.error);
    }
  }, [gamesAndCategories?.length]);
  return { gamesAndCategories };
};
