import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { loginReducer } from "./Reducers/Login";
import { carouselReducer } from "./Reducers/Content/Carousel";
import { secondaryReducer } from "./Reducers/Content/Secondary";
import { aboutReducer } from "./Reducers/Content/About";
import { productReducer } from "./Reducers/ProductManagement";

const reducer = combineReducers({
  login: loginReducer,
  carousel: carouselReducer,
  secondary: secondaryReducer,
  about: aboutReducer,
  product: productReducer,
});

const makeStore = () =>
  configureStore({
    reducer: reducer,
  });

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production" ? true : false,
});
