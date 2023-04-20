import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../reducers/userReducer";
import { obrasReducer } from "../reducers/obrasReducer";
import { teatrosReducer } from "../reducers/teatrosReducer";

const reducer = {
  user: userReducer,
  obras: obrasReducer,
  teatros: teatrosReducer,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
