import { login, logout, refreshUser, registerNewUser } from "./authOperations";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type StateAuth = {
  user: any;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  isLoggedIn: boolean;
  isRefreshing: boolean;
};

const initialState: StateAuth = {
  user: { name: "", email: "", password: "", _id: "", createdAt: "" },
  tokens: {
    accessToken: "",
    refreshToken: "",
  },
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(registerNewUser.pending, (state, action) => state)
      .addCase(
        registerNewUser.fulfilled,
        (state, action: PayloadAction<any>) => state
      )
      .addCase(registerNewUser.rejected, (state, action) => state)
      .addCase(login.pending, (state, action) => state)
      .addCase(
        login.fulfilled,
        (
          state,
          action: PayloadAction<{
            loggedInUser: any;
            tokens: { accessToken: string; refreshToken: string };
          }>
        ) => {
          state.user = action.payload.loggedInUser;
          state.tokens.accessToken = action.payload.tokens.accessToken;
          state.tokens.refreshToken = action.payload.tokens.refreshToken;
          state.isLoggedIn = true;
        }
      )
      .addCase(login.rejected, (state, action) => state)
      .addCase(logout.pending, (state, action) => state)
      .addCase(logout.fulfilled, (state, action) => {
        state.user = initialState.user;
        state.tokens = initialState.tokens;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, action) => state)
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        console.log(action.payload);
        // state.user = action.payload.loggedInUser;
        state.tokens.accessToken = action.payload.accessToken;
        state.tokens.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => state),
});

export const authReducer = authSlice.reducer;
