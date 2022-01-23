import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./thememode";

const store = configureStore({
  reducer: themeReducer,
});

export default store;
