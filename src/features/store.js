import { configureStore } from "@reduxjs/toolkit";
import vedioReducer from "./videoSlice";

const store = configureStore({
  reducer: vedioReducer,
});

export default store;
