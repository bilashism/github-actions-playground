export const removeLastSlash = (input: string) => {
  if (typeof input !== 'string') throw new Error('Input must be a string.');

  if (input.endsWith('/')) return input.slice(0, -1);

  return input;
};
