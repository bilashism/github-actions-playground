import { Rating } from 'primereact/rating';

import {
  RatingStarOffIcon,
  RatingStarOnIcon,
} from '../../../components/icons/icons';
import { ServerReview } from '../../Currencies';

type Props = {
  review: ServerReview;
};

export const ServerReviewItem = ({
  review: { name, rating, reviewText, date },
}: Props) => {
  return (
    <div className="flex flex-wrap justify-between items-center">
      <div className="">
        <div className="flex flex-wrap gap-4">
          <h2 className="">{name}</h2>
          <Rating
            className="flex justify-center gap-0.5"
            value={Math.ceil(rating)}
            stars={5}
            readOnly
            // onChange={(e) => {
            //   setUserRating(Number(e.value));
            //   setValue('rating', Number(e.value));
            // }}
            onIcon={<RatingStarOnIcon />}
            offIcon={<RatingStarOffIcon />}
            cancel={false}
          />
        </div>
        <p className="text-brand-black-70">{reviewText}</p>
      </div>
      <time className="" dateTime={date}>
        {date}
      </time>
    </div>
  );
};
