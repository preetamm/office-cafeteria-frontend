import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from 'redux-logger'
import categorySlice from "./category/category.slice";
import menuListSlice from "./menu/menu.slice";
import cartSlice from  './cart/cart.slice'
import authSlice from './auth/auth.slice'
import orderSlice from './order/order.slice'

const reducer = combineReducers({
  // here we will be adding reducers
  categorySlice,
  menuListSlice,
  cartSlice,
  authSlice,
  orderSlice
});


const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
