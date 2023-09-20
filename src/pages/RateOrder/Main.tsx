import { Rating } from 'primereact/rating';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import {
  RatingStarOffIcon,
  RatingStarOnIcon,
} from '../../components/icons/icons';
import { GradientBordered } from '../../components/ui/GradientBordered';
import { ORDER_STATUS } from '../../enums';
import { ORDERS_DATA } from '../Orders/Main';
import { OrderDetailsMetaInfo } from '../OrdersSingle/components/OrderDetailsMetaInfo';

type RateOrderFormInputs = {
  rating: number;
  review: string;
};
// Custom validation rule to check for special characters
export const validateNoSpecialChars = (value: string) => {
  // Regular expression to match special characters
  const specialCharsRegex = /[#$%^&*()+=[\]{}\\|<>/]+/;
  if (specialCharsRegex.test(value.trim())) {
    return 'No special characters are allowed'; // Validation fails
  }
  return true; // Validation passes
};

export const Main = () => {
  const { uid } = useParams<{ uid: string }>();
  const [userRating, setUserRating] = useState(4);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<RateOrderFormInputs>({
    defaultValues: {
      rating: userRating,
    },
  });

  if (!uid) {
    return <p className="text-red-500 text-center">No valid order ID found!</p>;
  }

  const order = ORDERS_DATA?.find((item) => item?.uid === uid);

  if (!order) {
    return <p className="text-red-500 text-center">No order found!</p>;
  }

  const { date, status } = order;

  const onSubmit: SubmitHandler<RateOrderFormInputs> = (data) => {
    data.review = data.review.trim();
    console.log(data);
  };

  if (status !== ORDER_STATUS.COMPLETED) {
    return (
      <p className="text-red-500 text-center">Not eligible for rating yet.</p>
    );
  }

  return (
    <main className="relative isolate z-0 py-4 xl:py-4">
      <div className="fb-container">
        <div className="grid gap-8 pb-8">
          <GradientBordered className="rounded-[1.25rem] before:rounded-[1.25rem] before:bg-gradient-bordered-light p-4 xl:p-9 bg-multi-gradient-1">
            <div className="grid gap-5 xl:gap-8 max-w-3xl mx-auto">
              <h2 className="capitalize text-center font-semibold font-tti-demi-bold text-[clamp(1.25rem,4vw,2rem)] leading-tight">
                Order info
              </h2>
              <div className="w-full grid xl:grid-cols-2 items-start gap-5">
                <OrderDetailsMetaInfo label="Game" value="World of Warcraft" />
                <OrderDetailsMetaInfo label="Category" value="Gold" />
              </div>
              <div className="w-full grid xl:grid-cols-2 items-start gap-5">
                <OrderDetailsMetaInfo label="Quantity" value="300,000" />
                <OrderDetailsMetaInfo label="Created" value={date} />
              </div>
              <div className="w-full grid xl:grid-cols-2 items-start gap-5">
                <OrderDetailsMetaInfo label="Seller" value="Jhon Doe" />
                <OrderDetailsMetaInfo
                  label="Order Completion Time"
                  value="15 Minutes"
                />
              </div>
            </div>
          </GradientBordered>

          <GradientBordered className="rounded-[.625rem] before:rounded-[.625rem] before:bg-gradient-bordered-light bg-brand-primary-color-1/[.03] py-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-8">
                {/* rating */}
                <div className="px-5">
                  <div className="grid gap-8">
                    <h2 className="text-start font-bold font-tti-bold text-[clamp(1.25rem,4vw,2rem)] leading-tight">
                      How would you rate you order?
                    </h2>
                    <div className="flex justify-center py-4">
                      <input
                        type="hidden"
                        readOnly
                        {...register('rating', {
                          valueAsNumber: true,
                        })}
                      />
                      <div className="">
                        <Rating
                          className="flex justify-center gap-2"
                          value={userRating}
                          stars={5}
                          onChange={(e) => {
                            setUserRating(Number(e.value));
                            setValue('rating', Number(e.value));
                          }}
                          onIcon={<RatingStarOnIcon />}
                          offIcon={<RatingStarOffIcon />}
                          cancel={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* review */}
                <div className="px-5">
                  <div className="font-oxanium text-sm xl:text-base leading-none font-normal">
                    <div className="flex flex-col gap-4 xl:gap-8 relative">
                      <label
                        htmlFor="review"
                        className="text-start font-bold font-tti-bold text-[clamp(1.25rem,4vw,2rem)] leading-tight"
                      >
                        Let{' '}
                        <span className="text-brand-primary-color-1">
                          FullBoosts
                        </span>{' '}
                        know how your order went:
                      </label>
                      <GradientBordered className="px-4 py-3 rounded-[.625rem] before:rounded-[.625rem] before:bg-gradient-bordered-deep bg-brand-primary-color-1/[.03]">
                        <textarea
                          id="review"
                          className="flex min-h-[7rem] max-h-52 w-full h-full bg-transparent outline-none text-brand-black-5"
                          placeholder="Type here"
                          // cols={30}
                          rows={10}
                          {...register('review', {
                            validate: {
                              noSpecialChars: validateNoSpecialChars,
                            },
                          })}
                        />
                      </GradientBordered>
                      {errors?.review ? (
                        <p className="text-red-500">
                          {errors.review?.message ||
                            'No special characters are allowed!'}
                        </p>
                      ) : (
                        false
                      )}
                      <p className="text-brand-black-20 text-sm xl:text-base leading-none font-normal">
                        Thank you!
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-0 border-t border-brand-primary-color-light/30" />

                <div className="text-center">
                  <button
                    type="submit"
                    className='inline-flex w-44 justify-center items-center px-3 xl:px-6 py-3 xl:py-4 text-lg xl:text-xl leading-tight rounded-md font-semibold font-oxanium text-white bg-fading-theme-gradient-light-to-deep hover:bg-[linear-gradient(theme("colors.brand.primary.color-1")_100%,theme("colors.brand.primary.color-1")_100%)] transition-all'
                  >
                    Apply
                  </button>
                </div>
              </div>
            </form>
          </GradientBordered>
        </div>
      </div>
    </main>
  );
};
