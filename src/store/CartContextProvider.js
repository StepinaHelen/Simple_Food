import CartContext from "./cart-context";
import { useReducer } from "react";
import { TYPES_LIST } from "../common/constants";
import {
  setLocalStorageItem,
  getLocalStorageItem,
} from "../services/persistence-service";
const defaultCartSate = getLocalStorageItem("cartItems")
  ? getLocalStorageItem("cartItems")
  : {
      items: [],
      totalAmount: 0,
    };

const cartReducer = (state, action) => {
  if (action.type === TYPES_LIST.addItem) {
    const exitingItemIndex = state.items.findIndex(
      (el) => el.id === action.item.id
    );
    const exitingCard = state.items[exitingItemIndex];

    let updatedItem;
    let updatedItems;

    if (exitingCard) {
      updatedItem = {
        ...exitingCard,
        amount: action.item.amount + exitingCard.amount,
      };
      updatedItems = [...state.items];
      updatedItems[exitingItemIndex] = updatedItem;
    } else {
      updatedItem = {
        ...action.item,
      };
      updatedItems = state.items.concat(updatedItem);
    }

    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const newSstate = {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
    setLocalStorageItem("cartItems", newSstate);
    return newSstate;
  }
  if (action.type === TYPES_LIST.removeItem) {
    const filteredItems = state.items.filter((el) => el.id !== action.id);
    const deletedIndex = state.items.findIndex((el) => el.id === action.id);
    const deletedCard = state.items[deletedIndex];
    const newSstate = {
      items: filteredItems,
      totalAmount: state.totalAmount - deletedCard.amount * deletedCard.price,
    };

    setLocalStorageItem("cartItems", newSstate);
    return newSstate;
  }
  if (action.type === TYPES_LIST.clearCart) {
    localStorage.clear("cartItems");
    return defaultCartSate;
  }

  return defaultCartSate;

};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartSate
  );

  const addItemHandler = (item) => {
    dispatchCartState({
      type: TYPES_LIST.addItem,
      item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchCartState({ type: TYPES_LIST.removeItem, id });
  };

  const clearCartHandler = () => {
    dispatchCartState({ type: TYPES_LIST.clearCart });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
