import { ReactNode } from 'react';

export interface IProduct {
  _id: number;
  name: string;
  image: string;
  price: number;
  features: string[];
  status: boolean;
  rating: number;
  quantity?: number;
}

export type GameCategory = {
  id: string;
  title: {
    en: string;
  };
  url: {
    en: string;
  };
  subCategories?: GameCategory[] | null;
};

export type Game = {
  isDisplayedInCatalog: boolean;
  id: string;
  title: {
    en: string;
  };
  categories?: GameCategory[];
};
