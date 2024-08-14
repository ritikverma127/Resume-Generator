import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers"; // Make sure the import path is correct

const store = configureStore({
  reducer: {
    user: userReducer
  }
});

export default store;
