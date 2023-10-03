import { configureStore } from "@reduxjs/toolkit";
import stateReducers from "./stateSlice";
import { api } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    counter: stateReducers,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
