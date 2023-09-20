import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { IProduct } from '../../../types/globalTypes';

type Cart = {
  isOpen: boolean;
  products: IProduct[];
  total: number;
};

const initialState: Cart = {
  isOpen: false,
  total: 0,
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCartModal: (state) => {
      state.isOpen = true;
    },
    closeCartModal: (state) => {
      state.isOpen = false;
    },
    toggleCartModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingProduct = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity = existingProduct.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    removeByOne: (state, action: PayloadAction<IProduct>) => {
      const existingProduct = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct && existingProduct.quantity! > 1) {
        existingProduct.quantity = existingProduct.quantity! - 1;
      } else {
        state.products = state.products.filter(
          (product) => action.payload._id !== product._id
        );
      }
      state.total -= action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => action.payload._id !== product._id
      );
      state.total -= action.payload.price * action.payload.quantity!;
    },
  },
});
export const {
  openCartModal,
  closeCartModal,
  toggleCartModal,
  addToCart,
  removeByOne,
  removeFromCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
