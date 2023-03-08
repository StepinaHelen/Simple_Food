import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "services/persistence-service";

const initialCartState = {
  items: getLocalStorageItem("cartItems")
    ? getLocalStorageItem("cartItems").items
    : [],
  totalAmount: getLocalStorageItem("cartItems")
    ? getLocalStorageItem("cartItems").totalAmount
    : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem: (state, action) => {
      const exitingItemIndex = state.items.findIndex(
        (el) => el.id === action.payload.id
      );
      const exitingCard = state.items[exitingItemIndex];

      let updatedItem;
      let updatedItems;

      if (exitingCard) {
        updatedItem = {
          ...exitingCard,
          amount: action.payload.amount + exitingCard.amount,
        };
        updatedItems = [...state.items];
        updatedItems[exitingItemIndex] = updatedItem;
      } else {
        updatedItem = {
          ...action.payload,
        };
        updatedItems = state.items.concat(updatedItem);
      }

      const updateTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
      const newState = {
        items: updatedItems,
        totalAmount: updateTotalAmount,
      };
      setLocalStorageItem("cartItems", newState);
      state.items = updatedItems;
      state.totalAmount = updateTotalAmount;
    },

    removeItem: (state, action) => {
      const filteredItems = state.items.filter(
        (el) => el.id !== action.payload
      );
      const deletedIndex = state.items.findIndex(
        (el) => el.id === action.payload
      );
      const deletedCard = state.items[deletedIndex];
      const newState = {
        items: filteredItems,
        totalAmount: state.totalAmount - deletedCard.amount * deletedCard.price,
      };
      setLocalStorageItem("cartItems", newState);
      state.items = filteredItems;
      state.totalAmount = newState.totalAmount;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
