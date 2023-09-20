import { MouseEventHandler, useEffect, useState } from 'react';

import { Game, GameCategory } from '../../types/globalTypes';
import { ChevronRight } from '../icons/icons';

interface INavGameDropdown {
  onCloseModal: () => void;
}
export const NavGameDropdown = ({ onCloseModal }: INavGameDropdown) => {
  const [games, setGames] = useState<Game[]>();
  const [activeGame, setActiveGame] = useState<Game>();
  const [activeGameCategory, setActiveGameCategory] = useState<
    GameCategory | undefined
  >();

  useEffect(() => {
    if (games?.length === undefined || games.length === 0) {
      fetch('/data/games.json')
        .then((res) => res.json())
        .then((data: Game[]) => {
          setGames(data);
          setActiveGame(data[0]);
          const firstCategory = data[0].categories as GameCategory[];
          setActiveGameCategory(firstCategory[0]);
          // document.querySelector('[data-game]')?.classList.add('active');
          // document
          //   .querySelector('[data-category-ref]')
          //   ?.classList.add('active');
          // document.querySelector('[data-details-ref]')?.classList.add('active');
        })
        // eslint-disable-next-line no-console
        .catch(console.error);
    }
  }, [games?.length]);

  const handleActiveGame: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    // event.stopPropagation();
    const currentGameEl = event.currentTarget as HTMLElement;
    const currentGameId = currentGameEl?.dataset?.game;
    // if (currentGameEl?.parentElement) {
    //   [...currentGameEl.parentElement.children].forEach((btn) =>
    //     btn.classList.remove('active')
    //   );
    // }
    if (currentGameId) {
      const currentGame: Game | undefined = games?.find(
        (game) => game?.id === currentGameId
      );

      if (currentGame) {
        // Set the active game based on the currentGame object
        setActiveGame(currentGame);
        setActiveGameCategory(
          currentGame.categories && currentGame?.categories[0]
        );
        // currentGameEl?.classList.add('active');
        const areaContainer = currentGameEl.closest(
          `[data-area-container="navbar"]`
        );
        const gamesArea = areaContainer?.querySelector(`[data-area="games"]`);
        const categoriesArea = areaContainer?.querySelector(
          `[data-area="categories"]`
        );
        const detailsArea = areaContainer?.querySelector(
          `[data-area="details"]`
        );
        const navBackBtn = areaContainer?.querySelector(`.nav-back-btn`);
        gamesArea?.classList.add('hidden');
        categoriesArea?.classList.remove('hidden');
        navBackBtn?.classList.remove('hidden');
      }
    }
  };

  const handleActiveGameCategory: MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.preventDefault();
    // event.stopPropagation();
    const currentGameEl = event.currentTarget as HTMLElement;
    const [currentGameId, categoryId] = (
      currentGameEl?.dataset?.categoryRef as string
    ).split('-');
    // if (currentGameEl?.parentElement) {
    //   [...currentGameEl.parentElement.children].forEach((btn) =>
    //     btn.classList.remove('active')
    //   );
    // }
    if (currentGameId) {
      const currentGameCategory: GameCategory | undefined = games
        ?.find((game) => game?.id === currentGameId)
        ?.categories?.find((category) => category?.id === categoryId);

      if (currentGameCategory) {
        // Set the active game based on the currentGame object
        setActiveGameCategory(currentGameCategory);
        // currentGameEl?.classList.add('active');
        const areaContainer = currentGameEl.closest(
          `[data-area-container="navbar"]`
        );
        const gamesArea = areaContainer?.querySelector(`[data-area="games"]`);
        const categoriesArea = areaContainer?.querySelector(
          `[data-area="categories"]`
        );
        const detailsArea = areaContainer?.querySelector(
          `[data-area="details"]`
        );
        gamesArea?.classList.add('hidden');
        categoriesArea?.classList.add('hidden');
        detailsArea?.classList.remove('hidden');
      }
    }
  };
  const handleNavBack: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    // event.stopPropagation();

    const backButtonEl = event.currentTarget as HTMLButtonElement;

    const areaContainer = backButtonEl.closest(
      `[data-area-container="navbar"]`
    );
    const gamesArea = areaContainer?.querySelector(`[data-area="games"]`);
    const categoriesArea = areaContainer?.querySelector(
      `[data-area="categories"]`
    );
    const detailsArea = areaContainer?.querySelector(`[data-area="details"]`);

    if (!detailsArea?.classList.contains('hidden')) {
      detailsArea?.classList.add('hidden');
      categoriesArea?.classList.remove('hidden');
      backButtonEl.classList.remove('hidden');
    } else if (!categoriesArea?.classList.contains('hidden')) {
      categoriesArea?.classList.add('hidden');
      gamesArea?.classList.remove('hidden');
      backButtonEl.classList.add('hidden');
    }
  };

  return (
    <div
      data-area-container="navbar"
      className={`grid xl:grid-cols-3 gap-[9px] xl:[grid-template-areas:"games_categories_details"]`}
    >
      <div className="flex justify-between items-center xl:hidden pb-5">
        <button
          type="button"
          onClick={handleNavBack}
          className="hidden nav-back-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-white"
          >
            <path
              fillRule="evenodd"
              d="M15.694 18.694a1.043 1.043 0 0 0 0-1.476L10.47 12l5.224-5.218a1.043 1.043 0 0 0 0-1.476 1.046 1.046 0 0 0-1.478 0l-5.91 5.904a1.04 1.04 0 0 0-.305.79 1.04 1.04 0 0 0 .305.79l5.91 5.904c.408.408 1.07.408 1.478 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={onCloseModal}
          className="ml-auto inline-flex justify-center items-center fill-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <path
              fillRule="evenodd"
              d="M6.148 4.852a.917.917 0 1 0-1.296 1.296L9.704 11l-4.852 4.852a.917.917 0 1 0 1.296 1.296L11 12.296l4.852 4.852a.917.917 0 0 0 1.296-1.296L12.296 11l4.852-4.852a.917.917 0 1 0-1.296-1.296L11 9.704 6.148 4.852Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div data-area="games" className="xl:block xl:[grid-area:games]">
        <h2 className="first-letter:capitalize text-sm leading-none pb-4">
          Choose the game
        </h2>
        <div className="flex flex-col gap-1 max-h-[calc(100vh-13rem)] xl:max-h-[calc(100vh-24rem)] overflow-y-auto minimal-scrollbar pr-2">
          {games?.map((game) => (
            <button
              type="button"
              key={game.id}
              className={`${
                activeGame?.id === game.id ? 'active' : ''
              }  text-start flex gap-2 justify-between items-center border border-transparent hover:border-brand-black-90 hover:bg-brand-black-110 [&.active]:border-brand-black-90 [&.active]:bg-brand-black-110 rounded-lg py-[15px] pl-3 pr-[9px] transition-colors text-brand-black-30`}
              data-game={game.id}
              onPointerEnter={(ev) => {
                if (window.matchMedia(`(min-width: 1280px)`).matches) {
                  handleActiveGame(ev);
                }
              }}
              onClick={handleActiveGame}
            >
              <span className="">{game.title.en}</span>
              {game?.categories && game.categories ? (
                <span className="">
                  <ChevronRight />
                </span>
              ) : (
                false
              )}
            </button>
          ))}
        </div>
      </div>

      <div
        data-area="categories"
        className="hidden xl:block xl:[grid-area:categories]"
      >
        <h2 className="first-letter:capitalize text-sm leading-none pb-4">
          categories
        </h2>
        <div className="flex flex-col max-h-[calc(100vh-13rem)] xl:max-h-[calc(100vh-24rem)] overflow-y-auto minimal-scrollbar pr-2 gap-[9px] ">
          {activeGame?.categories?.map((category) => {
            if (
              category?.subCategories &&
              category?.subCategories?.length >= 1
            ) {
              return (
                <button
                  onPointerEnter={(ev) => {
                    if (window.matchMedia(`(min-width: 1280px)`).matches) {
                      handleActiveGameCategory(ev);
                    }
                  }}
                  onClick={handleActiveGameCategory}
                  type="button"
                  key={category.id}
                  data-category-ref={`${activeGame.id}-${category.id}`}
                  className={`${
                    category?.id === activeGameCategory?.id ? 'active' : ''
                  } text-start flex gap-2 justify-between items-center border border-transparent hover:border-brand-black-90 hover:bg-brand-black-110 [&.active]:border-brand-black-90 [&.active]:bg-brand-black-110 rounded-lg py-[15px] pl-3 pr-[9px] transition-colors text-brand-black-30`}
                >
                  <span className="">{category.title.en}</span>
                  {category?.subCategories && category.subCategories ? (
                    <span className="">
                      <ChevronRight />
                    </span>
                  ) : (
                    false
                  )}
                </button>
              );
            }
            return (
              <button
                onPointerEnter={(ev) => {
                  if (window.matchMedia(`(min-width: 1280px)`).matches) {
                    handleActiveGameCategory(ev);
                  }
                }}
                onClick={handleActiveGameCategory}
                type="button"
                key={category.id}
                data-category-ref={`${activeGame.id}-${category.id}`}
                className={`${
                  category?.id === activeGameCategory?.id ? 'active' : ''
                } text-start flex gap-2 justify-between items-center border border-transparent hover:border-brand-black-90 hover:bg-brand-black-110 [&.active]:border-brand-black-90 [&.active]:bg-brand-black-110 rounded-lg py-[15px] pl-3 pr-[9px] transition-colors text-brand-black-30`}
              >
                <span className="">{category.title.en}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        data-area="details"
        className="hidden xl:block xl:[grid-area:details]"
      >
        <h2 className="first-letter:capitalize text-sm leading-none pb-4">
          details
        </h2>
        <div className="flex flex-col max-h-[calc(100vh-13rem)] xl:max-h-[calc(100vh-24rem)] overflow-y-auto minimal-scrollbar pr-2 gap-[9px] ">
          {activeGameCategory?.subCategories ? (
            <button
              key={activeGameCategory?.id}
              data-details-ref={activeGameCategory?.id}
              type="button"
              className="text-start flex gap-2 justify-between items-center border border-transparent hover:text-brand-primary-color-1 rounded-lg py-[15px] pl-3 pr-[9px] transition-colors text-brand-black-30"
            >
              {activeGameCategory?.title.en}
            </button>
          ) : (
            false
          )}

          {activeGameCategory?.subCategories &&
          activeGameCategory?.subCategories?.length >= 1 ? (
            <p className="text-xs">More links..</p>
          ) : (
            false
          )}
          {activeGameCategory?.subCategories?.map((subCategory) => (
            <button
              key={subCategory.id}
              data-details-ref={subCategory.id}
              type="button"
              className="text-start flex gap-2 justify-between items-center border border-transparent hover:text-brand-primary-color-1 rounded-lg py-[15px] pl-3 pr-[9px] transition-colors text-brand-black-30"
            >
              {subCategory.title.en}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
