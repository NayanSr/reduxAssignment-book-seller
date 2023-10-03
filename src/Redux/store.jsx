import { configureStore } from "@reduxjs/toolkit";
// import stateReducers from "./stateSlice";
import userReducer from "../Redux/user/userSlice";
import { api } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    // counter: stateReducers,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
