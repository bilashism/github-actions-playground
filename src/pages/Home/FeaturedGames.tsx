import { Link } from 'react-router-dom';

import featured1 from '../../assets/images/featured-1.png';
import featured2 from '../../assets/images/featured-2.png';
import featured3 from '../../assets/images/featured-3.png';
import { FeaturedGameCard } from '../../components/ui/FeaturedGameCard';
import { ROUTER_PATH } from '../../enums/router-path';

export type GameDataType = {
  id: string;
  uid: string;
  title: string;
  posterUrl: string;
};

export const FEATURED_GAMES_DATA: GameDataType[] = [
  {
    id: '63fe08ed-e593-5d0c-b6b2-3b3a100c1d35',
    uid: 'world-of-warcraft',
    title: 'World of Warcraft',
    posterUrl: featured1,
  },
  {
    id: '4de111af-1f89-50da-abb4-f2d2fe8a06ae',
    uid: 'valorant',
    title: 'Valorant',
    posterUrl: featured2,
  },
  {
    id: 'f1b25095-c2fb-5834-bc14-5f70487aef7b',
    uid: 'diablo4',
    title: 'Diablo4',
    posterUrl: featured3,
  },
];
export const FeaturedGames = () => {
  return (
    <section className="py-12 bg-brand-black-100 relative isolate z-0 overflow-hidden">
      <div className="fb-container">
        <div className="flex flex-col gap-5 xl:gap-9">
          <h2 className="text-center font-bold font-tti-bold text-[clamp(1.5rem,4vw,2.5rem)] leading-tight capitalize text-brand-primary-color-1/30 bg-clip-text bg-[linear-gradient(293deg,var(--tw-gradient-stops))]  from-brand-primary-color-1 to-brand-primary-color-light animate-text-gradient">
            Featured
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-center xl:flex-nowrap gap-8 items-center">
            {FEATURED_GAMES_DATA.map((featuredGame) => (
              <FeaturedGameCard key={featuredGame.id} card={featuredGame} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to={ROUTER_PATH.GAMES}
              className="relative isolate rounded-md overflow-hidden bg-brand-primary-color-1/[0.03] gradient-bordered before:p-px before:rounded-md before:bg-[linear-gradient(91.55deg,rgba(235,221,208,.25),rgba(241,101,52,.75))] inline-flex h-full flex-row justify-between items-center gap-2 px-4 xl:px-5 py-4 xl:py-7 font-oxanium font-medium text-base leading-none text-brand-primary-color-1 hover:text-brand-primary-color-light transition-colors"
            >
              Discover more games
            </Link>
          </div>
        </div>
      </div>
      <figure className="absolute -z-10 w-80 aspect-square -left-36 top-56 blur-xl rounded-circle  bg-[radial-gradient(50.26%_50.56%_at_49.58%_49.98%,rgba(241,99,52,0.15)_0%,rgba(129,55,30,0.08)_42%,rgba(11,18,23,0)_100%)]" />
      <figure className="absolute -z-10 w-[28rem] aspect-square -right-64 bottom-40 blur-[6rem] rounded-circle bg-brand-blue-550/10" />
    </section>
  );
};
