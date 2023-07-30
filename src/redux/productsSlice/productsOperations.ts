import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://products-api-umhe.onrender.com/api/";

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/products?filter=ASC_DATE&limit=12`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchByFilter = createAsyncThunk(
  "products/fetchByFilter",
  async (filter: string, thunkAPI) => {
    try {
      const response = await axios.get(`/products?filter=${filter}&limit=12`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
