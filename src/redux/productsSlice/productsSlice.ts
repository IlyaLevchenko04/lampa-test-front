import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts, fetchByFilter } from "./productsOperations";

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
};

const initialState: State = {
  items: [],
  isLoading: false,
  error: {},
};

const handlePending = (state: State) => {
  state.isLoading = true;
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProducts.fulfilled,
        (state: State, action: PayloadAction<Item[]>) => {
          state.items = [...state.items, ...action.payload];
          state.isLoading = !state.isLoading;
        }
      )
      .addCase(fetchProducts.pending, (state: State, action) => {
        handlePending(state);
      })
      .addCase(fetchProducts.rejected, (state: State, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(
        fetchByFilter.fulfilled,
        (state: State, action: PayloadAction<Item[]>) => {
          state.items = action.payload;
        }
      );
  },
});

export const productsReducer = productsSlice.reducer;
