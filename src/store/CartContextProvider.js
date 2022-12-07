import CartContext from "./cart-context";
import { useReducer } from "react";
import { TYPES_LIST } from "../common/constants";

const defaultCartSate = {
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
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === TYPES_LIST.removeItem) {
    const filteredItems = state.items.filter((el) => el.id !== action.id);
    const deletedIndex = state.items.findIndex((el) => el.id === action.id);
    const deletedCard = state.items[deletedIndex];
    return {
      items: filteredItems,
      totalAmount: state.totalAmount - deletedCard.amount * deletedCard.price,
    };
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

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;