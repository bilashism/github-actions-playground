import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function twMergeClsx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
