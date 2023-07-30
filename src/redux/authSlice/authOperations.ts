import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FieldValues } from "react-hook-form";

axios.defaults.baseURL = "https://products-api-umhe.onrender.com/api";

const setToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const registerNewUser = createAsyncThunk(
  "auth/register",
  async (credentials: FieldValues, thunkAPI) => {
    try {
      const response = await axios.post("/auth/register", credentials);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: FieldValues, thunkAPI) => {
    try {
      const response = await axios.post("/auth/login", credentials);
      setToken(response.data.tokens.accessToken);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    clearToken();
  } catch (error: any) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (refreshToken: string, thunkAPI: any) => {
    try {
      console.log(refreshToken);
      if (!refreshToken) {
        return thunkAPI.rejectWithValue("No token");
      }
      const response = await axios.post("/auth/refreshToken", refreshToken);

      return response;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
