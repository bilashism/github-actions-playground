import kebabCase from 'lodash/kebabCase';

import { TCurrencyFilter } from '../../Currencies';

type Props = {
  data: TCurrencyFilter;
};

export const ThemeRadioInputBox = ({ data: { name, options } }: Props) => {
  return (
    <div className="flex relative z-0 flex-wrap gap-1 border border-brand-primary-color-1/20 bg-brand-primary-color-1/10 rounded-md">
      {options?.map((option, idx) => (
        <label key={option} htmlFor={kebabCase(option)}>
          <input
            type="radio"
            name={name}
            value={option}
            defaultChecked={idx === 0}
            id={kebabCase(option)}
            className="peer sr-only"
          />
          <span className="inline-flex items-center justify-center w-full h-full rounded-md py-3 px-3.5 cursor-pointer text-[clamp(.8125rem,2vw,.9375rem)] leading-none font-tti-medium font-medium text-brand-black-30 peer-checked:text-brand-black-5 peer-checked:outline peer-checked:outline-1 peer-checked:outline-brand-primary-color-1 peer-checked:bg-brand-primary-color-1/20 transition-all">
            <span className="first-letter:uppercase">{option}</span>
          </span>
        </label>
      ))}
    </div>
  );
};
