import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: "ASC_DATE",
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      if (action.payload === "Ascending date") {
        return (state = "ASC_DATE");
      }

      if (action.payload === "Ascending price") {
        return (state = "ASC_PRICE");
      }

      if (action.payload === "Descending date") {
        return (state = "DESC_DATE");
      }

      if (action.payload === "Descending price") {
        return (state = "DESC_PRICE");
      }
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
