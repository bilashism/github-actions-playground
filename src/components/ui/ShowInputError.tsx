import { FieldErrors, FieldValues } from 'react-hook-form';

type Props<T extends FieldValues> = {
  name: keyof T;
  errors: FieldErrors<T>;
};

const getNestedFormError = <T extends FieldValues>(
  errors: FieldErrors<T>,
  fieldName: string
) => {
  const pathArray = fieldName.split('.');
  return pathArray.reduce((current, prop) => {
    if (prop in current) {
      return current[prop] as unknown as FieldErrors<T>;
    }
    return current;
  }, errors);
};

export const ShowInputError = <T extends FieldValues>({
  errors,
  name,
}: Props<T>) => {
  if (!errors || typeof name !== 'string') return null;

  const isNested = name.includes('.');
  const data = isNested ? getNestedFormError(errors, name) : errors[name];

  return data ? (
    <p className="text-red-500 first-letter:uppercase">
      {data?.message?.toString()}
    </p>
  ) : null;
};
