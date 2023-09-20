import { HTMLInputTypeAttribute, HTMLProps, ReactNode } from 'react';
import {
  FieldErrors,
  FieldValues,
  UseFormRegisterReturn,
} from 'react-hook-form';

import { GradientBordered } from '../../../components/ui/GradientBordered';
import { ShowInputError } from '../../../components/ui/ShowInputError';
import { twMergeClsx } from '../../../utils/twMergeClsx';

type Props<T extends FieldValues> = {
  register?: UseFormRegisterReturn;
  errors?: FieldErrors<T>;
  showRequiredStar?: boolean;
  type?: HTMLInputTypeAttribute;
  label?: string;
  children?: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'start' | 'end';
} & Omit<HTMLProps<HTMLInputElement>, 'ref' | 'type'>;

export const GradientBorderedInput = <T extends FieldValues>({
  register,
  errors,
  type,
  showRequiredStar,
  label,
  children,
  icon,
  iconPosition,
  className,
  ...attributes
}: Props<T>) => {
  const inputId = attributes?.id || crypto.randomUUID().toString();
  return (
    <div className="flex flex-col gap-2 xl:gap-4 relative overflow-clip">
      <label
        htmlFor={inputId}
        className={`text-brand-black-10 text-sm xl:text-lg leading-none font-normal flex justify-start gap-1 ${
          !label ? 'sr-only' : ''
        } ${attributes?.disabled ? 'cursor-not-allowed' : ''}`}
      >
        <span className="first-letter:uppercase">
          {label || register?.name || attributes?.placeholder}
        </span>
        {showRequiredStar ? (
          <span className="text-brand-primary-color-1">*</span>
        ) : (
          false
        )}
      </label>
      <GradientBordered
        className={twMergeClsx(
          `rounded-[.65rem] before:rounded-[0.65rem] before:bg-gradient-bordered-deep flex flex-row justify-between items-center gap-2 ${className}`
        )}
      >
        {iconPosition === 'start' && icon ? icon : false}
        <input
          type={type}
          id={inputId}
          className="w-full h-full leading-none rounded-[.65rem] py-2.5 xl:py-3.5 px-2 xl:px-4 bg-transparent outline-none placeholder:text-base placeholder:leading-none placeholder:font-normal disabled:text-brand-black-30 disabled:cursor-not-allowed"
          {...register}
          {...attributes}
        />
        {iconPosition === 'end' && icon ? icon : false}
      </GradientBordered>
      {register && errors ? (
        <ShowInputError errors={errors} name={register?.name} />
      ) : (
        false
      )}
      {children}
    </div>
  );
};

GradientBorderedInput.defaultProps = {
  type: 'text' as const,
  icon: undefined,
  iconPosition: 'start' as const,
  showRequiredStar: false as const,
  label: undefined,
  children: undefined,
  errors: undefined,
  register: undefined,
};
