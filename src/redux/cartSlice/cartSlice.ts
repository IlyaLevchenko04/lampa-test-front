import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export type Item = {
  _id: string;
  price: number;
  title: string;
  description: string;
  mainPhoto: string;
  photos: string[];
  currency: string;
  categoryId: string;
  createDate: Date;
};

export type State = {
  items: Item[];
  isLoading: boolean;
  error: any;
  totalPrice: number;
};

const initialState: State = {
  items: [],
  isLoading: false,
  totalPrice: 0,
  error: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state: State, action: PayloadAction<Item>) {
      const isInCart = state.items.find(
        ({ _id }) => _id === action.payload._id
      );

      if (isInCart) {
        toast("Product already in cart");
        return;
      }

      state.items = [...state.items, action.payload];
      state.totalPrice += action.payload.price;
    },
    deleteFromCart(state: State, action: PayloadAction<string>) {
      const deletedProduct = state.items.find(
        ({ _id }) => _id === action.payload
      );

      const newArr: any = state.items.filter(
        ({ _id }) => _id !== action.payload
      );

      state.items = [...newArr];
      state.totalPrice -= deletedProduct!.price;
    },
    onFormSubmit(state: State, action: PayloadAction<void>) {
      state.items = initialState.items;
      state.totalPrice = 0;
    },
    onPriceChange(
      state: State,
      action: PayloadAction<{ type: string; price: number }>
    ) {
      if (action.payload.type === "minus") {
        state.totalPrice -= action.payload.price;
        return;
      }

      if (action.payload.type === "plus") {
        state.totalPrice += action.payload.price;
        return;
      }
    },
    setTotalPrice(state: State, action: PayloadAction<number>) {
      console.log(action.payload);
      state.totalPrice += action.payload;
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  onFormSubmit,
  onPriceChange,
  setTotalPrice,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
