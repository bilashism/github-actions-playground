import { ComponentProps } from 'react';

import { useAppSelector } from '../../redux/hooks';

import { CURRENCY_DATA } from './SelectCurrencyDropdown';

/**
 * The CurrencySymbol component returns the symbol of a selected currency.
 * @param props - The `props` parameter is an object that contains the properties passed to the
 * `CurrencySymbol` component. These properties can include any valid HTML attributes that can be
 * applied to a `<span>` element.
 * @returns The CurrencySymbol component is returning a span element with the symbol of the selected
 * currency.
 */
export const CurrencySymbol = (props: ComponentProps<'span'>) => {
  const { currency } = useAppSelector((state) => state.currency);
  const symbol = CURRENCY_DATA.find((c) => c.value === currency)?.symbol;
  return <span {...props}>{symbol}</span>;
};
