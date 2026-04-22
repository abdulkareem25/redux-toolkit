import { configureStore, createStore } from "@reduxjs/toolkit";
import searchReducer from "./search.slice";

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default store;