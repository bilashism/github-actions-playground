import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoIosSearch } from 'react-icons/io';

import { Dropdown } from '../../../components/ui/Dropdown';
import { GradientBordered } from '../../../components/ui/GradientBordered';
import { ShowInputError } from '../../../components/ui/ShowInputError';
import { validateNoSpecialChars } from '../../RateOrder/Main';

type SupportFormInputs = {
  category: string;
  topic: string;
  issue: string;
};

export const SupportForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm<SupportFormInputs>();
  const [category, setCategory] = useState<string>();
  const [topic, setTopic] = useState<string>();

  const categoryOptions = [
    'Chief Data Manager',
    'Legacy Configuration Planner',
    'Product Group Consultant',
    'Direct Integration Architect',
    'Lead Quality Technician',
    'Customer Accounts Officer',
    'Direct Accountability Agent',
    'Dynamic Web Administrator',
  ];
  const topicOptions = ['topic 1', 'topic 2', 'topic 3', 'topic 4', 'topic 5'];

  useEffect(() => {
    if (category) {
      clearErrors('category');
    }
    if (topic) {
      clearErrors('topic');
    }
  }, [category, topic, clearErrors]);

  const onSubmit: SubmitHandler<SupportFormInputs> = (data) => {
    data.issue = data.issue.trim();

    console.log(data);
  };

  return (
    <GradientBordered className="rounded-[.625rem] before:rounded-[.625rem] before:bg-gradient-bordered-light bg-brand-primary-color-1/[.03] py-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-8">
          <div className="flex flex-wrap items-start justify-center gap-5 xl:gap-10">
            {/* category dropdown  */}
            <div className="w-56 max-w-full">
              <Dropdown
                heightClassName="h-50"
                leftIcon={<IoIosSearch className="w-5 h-5 shrink-0" />}
                defaultLabel="category"
                selectHandler={(val) => {
                  setValue('category', val);
                  setCategory(val);
                }}
                options={categoryOptions}
              />
              <input
                type="hidden"
                {...register('category', {
                  required: 'Please select a category',
                })}
              />
              <ShowInputError errors={errors} name="category" />
            </div>
            {/* topic dropdown  */}
            <div className="w-56 max-w-full">
              <Dropdown
                heightClassName="h-40"
                leftIcon={<IoIosSearch className="w-5 h-5 shrink-0" />}
                defaultLabel="topic"
                selectHandler={(val) => {
                  setValue('topic', val);
                  setTopic(val);
                }}
                options={topicOptions}
              />
              <input
                type="hidden"
                {...register('topic', {
                  required: 'Please select a topic',
                })}
              />
              <ShowInputError errors={errors} name="topic" />
            </div>
          </div>

          {/* issue */}
          <div className="px-5">
            <div className="font-oxanium text-sm xl:text-base leading-none font-normal">
              <div className="flex flex-col gap-4 xl:gap-8 relative">
                <label
                  htmlFor="issue"
                  className="text-start font-bold font-tti-bold text-[clamp(1.25rem,4vw,2rem)] leading-tight"
                >
                  Tell{' '}
                  <span className="text-brand-primary-color-1">FullBoosts</span>{' '}
                  about your issue:
                </label>
                <GradientBordered className="px-4 py-3 rounded-[.625rem] before:rounded-[.625rem] before:bg-gradient-bordered-deep bg-brand-primary-color-1/[.03]">
                  <textarea
                    id="issue"
                    className="flex min-h-[7rem] max-h-52 w-full h-full bg-transparent outline-none text-brand-black-5"
                    placeholder="Type here..."
                    // cols={30}
                    rows={10}
                    {...register('issue', {
                      required: 'Please state your issue.',
                      validate: {
                        noSpecialChars: validateNoSpecialChars,
                      },
                    })}
                  />
                </GradientBordered>
                <ShowInputError errors={errors} name="issue" />
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
  );
};
