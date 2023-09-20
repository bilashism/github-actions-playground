import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  CURRENCY_VALUE,
  CurrencyValue,
} from '../../../components/ui/SelectCurrencyDropdown';
import { axiosIns } from '../../api/axiosInstance';

type CurrencySlice = {
  isLoading: boolean;
  isError: boolean;
  error?: string;
  currency: CurrencyValue;
  rate: number;
};
const initialState: CurrencySlice = {
  isLoading: false,
  isError: false,
  currency: CURRENCY_VALUE.USD,
  rate: 1,
} as const;

export const getCurrencyRate = createAsyncThunk(
  'currency/getRate',
  async (currencyValue: CurrencyValue) => {
    let rate: number;
    if (currencyValue === CURRENCY_VALUE.USD) {
      rate = initialState.rate;
    } else {
      const data = await axiosIns.get('/currency');
      // console.log(data?.data);
      rate = Number(data?.data?.data?.rates[currencyValue]);
    }
    return rate;
  }
);

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<CurrencyValue>) => {
      state.currency = action.payload;
    },
    // setCurrencyRate: (state, action: PayloadAction<number>) => {
    //   state.rate = action.payload;
    // },
  },
  extraReducers: (builder) => {
    // createNewUserWithEmailAndPassword
    builder
      .addCase(getCurrencyRate.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        // state.rate = 1;
      })
      .addCase(getCurrencyRate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.rate = action.payload;
      })
      .addCase(getCurrencyRate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        // state.rate = 1;
      });
  },
});
export const { setCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
