import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import orderReducer from "./order-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: orderReducer,
  },
});

export default store;
