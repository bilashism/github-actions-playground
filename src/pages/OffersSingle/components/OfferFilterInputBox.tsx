import { HTMLProps, ReactNode } from 'react';
import { FieldValues, UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  label: string;
  children: ReactNode;
};

export const OfferFilterInputBox = ({ label, children }: Props) => {
  return (
    <label className="flex grow gap-3 items-center relative isolate z-0 cursor-pointer text-sm leading-none font-normal text-brand-black-20 font-oxanium capitalize">
      {children}
      <span className="peer-checked:bg-brand-primary-color-1 transition-colors checked-bg-image-check-mark-black bg-center bg-no-repeat inline-flex w-4 aspect-square border-2 border-brand-primary-color-1/50 bg-transparent rounded-sm shrink-0" />
      <span className="inline-flex">{label}</span>
    </label>
  );
};

type InputToggleBox<T extends FieldValues> = {
  label: string;
  type: 'checkbox' | 'radio';
  register?: UseFormRegisterReturn;
  checkMark?: 'black' | 'white';
  // errors?: FieldErrors<T>;
} & Omit<HTMLProps<HTMLInputElement>, 'ref' | 'type'>;

export const InputToggleBox = <T extends FieldValues>({
  // errors,
  register,
  type,
  checkMark,
  label,
  ...attributes
}: InputToggleBox<T>) => {
  const inputId = attributes?.id || crypto.randomUUID().toString();
  return (
    <div className="flex flex-col gap-2 xl:gap-4 relative overflow-clip">
      <label
        htmlFor={inputId}
        className={`flex grow gap-3 items-center relative isolate z-0 cursor-pointer text-sm xl:text-base leading-none font-normal text-brand-black-20 hover:text-brand-black-10 transition-colors font-oxanium capitalize ${
          attributes?.disabled ? 'cursor-not-allowed pointer-events-none' : ''
        }`}
      >
        <input
          type={type}
          id={inputId}
          className="appearance-none sr-only peer disabled:text-brand-black-30 disabled:cursor-not-allowed"
          {...register}
          {...attributes}
        />
        <span
          className={`peer-checked:bg-brand-primary-color-1 transition-colors ${
            checkMark === 'black'
              ? 'checked-bg-image-check-mark-black'
              : 'checked-bg-image-check-mark'
          } bg-center bg-no-repeat inline-flex w-4 aspect-square border-2 border-brand-primary-color-1/50 bg-transparent rounded-sm shrink-0`}
        />
        <span className="inline-flex">{label}</span>
      </label>
      {/* {register && errors ? (
        <ShowInputError errors={errors} name={register?.name} />
      ) : (
        false
      )} */}
    </div>
  );
};

InputToggleBox.defaultProps = {
  checkMark: 'black' as const,
  register: undefined,
  // errors: undefined,
};
