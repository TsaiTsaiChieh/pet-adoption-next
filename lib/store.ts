import { configureStore } from "@reduxjs/toolkit";
import petReducer from "@app/features/petSlice";
import { petApi } from "@app/services/pet";

export const makeStore = () => {
  return configureStore({
    reducer: {
      pet: petReducer,
      [petApi.reducerPath]: petApi.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(petApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
