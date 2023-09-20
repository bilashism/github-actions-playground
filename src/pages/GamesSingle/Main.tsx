import { GameOffers } from './components/GameOffers';
import { ShowGameOffersCategories } from './components/ShowGameOffersCategories';
// import { useGamesSingleContext } from '.';

export const Main = () => {
  // const { uid } = useGamesSingleContext();

  // const order = ORDERS_DATA?.find((item) => item?.id === id);

  // if (!order) {
  //   return <p className="text-red-500 text-center">No order found!</p>;
  // }

  // const { status } = order;
  return (
    <main className="relative isolate z-0 py-4 xl:py-4 grid gap-4 xl:grid-cols-[min(17rem,100%),1fr] items-start">
      <div className="fb-container xl:m-0 xl:row-span-full xl:col-span-full w-full xl:max-w-[17rem] xl:flex-shrink-0 xl:sticky xl:top-[97px] z-10 2xl:px-4">
        <ShowGameOffersCategories />
      </div>
      <div className="fb-container xl:row-span-full xl:col-span-full">
        <div className="pb-20 xl:ml-auto xl:max-w-[calc(100%-17rem)] 2xl:max-w-[calc(100%-10rem)] 3xl:max-w-none">
          <GameOffers />
        </div>
      </div>
    </main>
  );
};
