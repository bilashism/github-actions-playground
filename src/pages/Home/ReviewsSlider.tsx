/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { CustomerReview, ReviewCard } from '../../components/ui/ReviewCard';

import './reviews-slider.css';

export const ReviewsSlider = () => {
  const [reviews, setReviews] = useState<CustomerReview[]>();
  useEffect(() => {
    if (reviews?.length === undefined || reviews.length === 0) {
      fetch('/data/reviews.json')
        .then((res) => res.json())
        .then((data: CustomerReview[]) => {
          setReviews(data);
        })
        .catch(console.error);
    }
  }, [reviews?.length]);

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1536: {
          // slidesPerView: 3,
          // spaceBetween: 160,
          slidesPerView: 4,
          spaceBetween: 42,
        },
      }}
      pagination={{
        clickable: false,
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      loop
      modules={[Pagination, Autoplay, Navigation]}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      className="justify-center reviews-slider"
    >
      {reviews?.map((review) => (
        <SwiperSlide key={`review-${review.id}`}>
          <ReviewCard review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
