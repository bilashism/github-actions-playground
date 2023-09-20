import { MouseEventHandler, ReactNode } from 'react';

import { useSingleOfferContext } from '..';

type Props = {
  children: ReactNode;
};

export const AddToCartButton = ({ children }: Props) => {
  const { gameOffer } = useSingleOfferContext();

  const handleAddToCart: MouseEventHandler<HTMLButtonElement> = (ev) => {
    console.log(gameOffer);
  };

  return (
    <button type="button" className="flex grow" onClick={handleAddToCart}>
      {children}
    </button>
  );
};
