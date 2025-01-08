import { configureStore } from "@reduxjs/toolkit";
import extensionSlice from "./slices/extensionSlice";

export const store = configureStore({
  reducer: {
    name: extensionSlice,
  },
});
