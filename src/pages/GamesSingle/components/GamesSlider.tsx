/* eslint-disable import/no-unresolved */
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import {
  Autoplay,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
} from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import bannerBg1 from '../../../assets/images/game-offers-slider-1.png';

import { Banner, IBanner } from './Banner';

import './games-slider.css';

const GamesSliderData: IBanner[] = [
  {
    id: '6a2fb5e0-22a9-5bab-8c2b-fba5c9166g12',
    title: 'Id est eligendi maxime iusto quia quam commodi nihil.',
    imageUrl: bannerBg1,
    thumbnailUrl: 'https://loremflickr.com/120/60/pc,games,battle?lock=36',
    videoUrl:
      'https://player.vimeo.com/progressive_redirect/playback/809639574/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=89d4b628d3951bc56dbe4fc30f37470e85a007e00071e202efbc3881e56d19cf',
    createdAt: '6/24/2057',
  },
  {
    id: '6a2fb5e0-22a9-5bab-8c2b-fba5c9166f12',
    title: 'Delectus aspernatur ut sed.',
    imageUrl: 'https://loremflickr.com/1920/480/pc,games,battle?lock=1',
    thumbnailUrl: 'https://loremflickr.com/120/60/pc,games,battle?lock=25',
    videoUrl:
      'https://player.vimeo.com/progressive_redirect/playback/809639574/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=89d4b628d3951bc56dbe4fc30f37470e85a007e00071e202efbc3881e56d19cf',
    createdAt: '6/24/2057',
  },
  {
    id: 'ccb880be-e345-522f-8e32-6cad0fbbbc89',
    title: 'Ea ullam ducimus mollitia id labore.',
    imageUrl: 'https://loremflickr.com/1920/480/pc,games,battle?lock=12',
    thumbnailUrl: 'https://loremflickr.com/120/60/pc,games,battle?lock=44',
    videoUrl:
      'https://player.vimeo.com/progressive_redirect/playback/809639574/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=89d4b628d3951bc56dbe4fc30f37470e85a007e00071e202efbc3881e56d19cf',
    createdAt: '6/24/2057',
  },
  {
    id: '20c30529-d406-52ad-9e47-c7ec08ab3bd1',
    title: 'Quia quo possimus ut.',
    imageUrl: 'https://loremflickr.com/1920/480/pc,games,battle?lock=5',
    thumbnailUrl: 'https://loremflickr.com/120/60/pc,games,battle?lock=42',
    videoUrl:
      'https://player.vimeo.com/progressive_redirect/playback/809639574/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=89d4b628d3951bc56dbe4fc30f37470e85a007e00071e202efbc3881e56d19cf',
    createdAt: '6/24/2057',
  },
];
export const GamesSlider = () => {
  const pagination = {
    clickable: true,
    renderBullet(index: number, className: string) {
      return `<img src="${GamesSliderData[index].thumbnailUrl}" alt="${GamesSliderData[index].title}" class="${className} !w-14 !h-7 xl:!w-24 xl:!h-14 object-cover !rounded-lg !opacity-100 [&.swiper-pagination-bullet-active]:bg-brand-primary-color-1/75 [&.swiper-pagination-bullet-active]:outline [&.swiper-pagination-bullet-active]:outline-4 [&.swiper-pagination-bullet-active]:outline-brand-black-1/80 inline-flex justify-center items-center" />`;
    },
  };
  return (
    <header className="relative isolate z-0 overflow-hidden">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        parallax
        speed={600}
        pagination={pagination}
        autoplay={{
          delay: 5500,
          disableOnInteraction: true,
        }}
        loop
        navigation={{
          nextEl: '.next-item',
          prevEl: '.prev-item',
        }}
        scrollbar={{
          // hide: true,
          draggable: true,
        }}
        modules={[Pagination, Autoplay, Navigation, Parallax, Scrollbar]}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        className="games-slider !flex relative isolate z-0 overflow-clip"
      >
        {GamesSliderData?.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Banner banner={banner} />
          </SwiperSlide>
        ))}
        <div className="games-slider-navigation self-end flex gap-4 xl:max-w-md items-center justify-between relative z-10 px-2 pointer-events-none">
          <MdNavigateBefore className="prev-item w-6 h-6 rounded-circle bg-brand-primary-color-1 hover:bg-brand-primary-color-light hover:text-brand-primary-color-1 transition-colors pointer-events-auto cursor-pointer" />
          <MdNavigateNext className="next-item w-6 h-6 rounded-circle bg-brand-primary-color-1 hover:bg-brand-primary-color-light hover:text-brand-primary-color-1 transition-colors pointer-events-auto cursor-pointer" />
        </div>
      </Swiper>
    </header>
  );
};
