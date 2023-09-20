import { MouseEventHandler, ReactNode } from 'react';

import { useSingleOfferContext } from '..';

type Props = {
  children: ReactNode;
};

export const ChatButton = ({ children }: Props) => {
  const { gameOffer } = useSingleOfferContext();

  const handleOfferChat: MouseEventHandler<HTMLButtonElement> = (ev) => {
    console.log(gameOffer);
  };

  return (
    <button type="button" className="flex grow" onClick={handleOfferChat}>
      {children}
    </button>
  );
};
