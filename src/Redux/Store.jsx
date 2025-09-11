import { configureStore } from "@reduxjs/toolkit";
import CountReducer from "./CountSlice";

export const Store = configureStore({
  reducer: {
    count: CountReducer
  }
});
