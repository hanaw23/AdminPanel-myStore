import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { loginReducer } from "./Reducers/Login";

const reducer = combineReducers({
  login: loginReducer,
});

const makeStore = () =>
  configureStore({
    reducer: reducer,
  });

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production" ? true : false,
});
