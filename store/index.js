import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { loginReducer } from "./Reducers/Login";
import { carouselReducer } from "./Reducers/Content/Carousel";
import { secondaryReducer } from "./Reducers/Content/Secondary";

const reducer = combineReducers({
  login: loginReducer,
  carousel: carouselReducer,
  secondary: secondaryReducer,
});

const makeStore = () =>
  configureStore({
    reducer: reducer,
  });

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production" ? true : false,
});
