import CartContext from "./cart-context";
import { PropsWithChildren, useReducer } from "react";
import { getLocalStorageItem } from "../services/persistence-service";
import {
  ICartContextState,
  ICardItem,
  ICartContext,
} from "../common/interfaces";
import {
  addItemHandler,
  removeItemHandler,
  clearCartHandler,
} from "./helpers-functions";
import { ICardActionTypes, CartActions } from "./interface";

const defaultCartState = getLocalStorageItem("cartItems")
  ? getLocalStorageItem("cartItems")
  : {
      items: [],
      totalAmount: 0,
    };

const cartReducer = (
  state: ICartContextState,
  action: CartActions
): ICartContextState => {
  switch (action.type) {
    case ICardActionTypes.addItem:
      return addItemHandler(state, action);

    case ICardActionTypes.removeItem:
      return removeItemHandler(state, action);

    case ICardActionTypes.clearCart:
      return clearCartHandler();

    default:
      return defaultCartState;
  }
};

const CartContextProvider = (props: PropsWithChildren) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item: ICardItem) => {
    dispatchCartState({
      type: ICardActionTypes.addItem,
      item,
    });
  };

  const removeItemHandler = (id: number): void => {
    dispatchCartState({ type: ICardActionTypes.removeItem, id });
  };

  const clearCartHandler = (): void => {
    dispatchCartState({ type: ICardActionTypes.clearCart });
  };

  const cartContext: ICartContext = {
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
