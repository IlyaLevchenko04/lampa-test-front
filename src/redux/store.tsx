import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { AnyAction } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { filterReducer } from "./filterSlice/filterSlice";
import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice/productsSlice";
import { State } from "./cartSlice/cartSlice";
import { cartReducer } from "./cartSlice/cartSlice";
import { authReducer, StateAuth } from "./authSlice/authSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["items", "totalPrice", "tokens"],
};

const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: persistReducer<State, AnyAction>(persistConfig, cartReducer),
    products: productsReducer,
    auth: persistReducer<StateAuth, AnyAction>(persistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
