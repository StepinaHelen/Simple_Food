import { setLocalStorageItem } from "services/persistence-service";
import { IAddToCart, IRemoveItem } from "store/interface";
import { ICartContextState, ICardItem } from "common/interfaces";

export const addItemHandler = (
  state: ICartContextState,
  action: IAddToCart
): ICartContextState => {
  const exitingItemIndex = state.items.findIndex(
    (el: ICardItem) => el.id === action.item.id
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
  const newState = {
    items: updatedItems,
    totalAmount: updateTotalAmount,
  };
  setLocalStorageItem("cartItems", newState);
  return newState;
};

export const removeItemHandler = (
  state: ICartContextState,
  action: IRemoveItem
): ICartContextState => {
  const filteredItems = state.items.filter((el) => el.id !== action.id);
  const deletedIndex = state.items.findIndex((el) => el.id === action.id);
  const deletedCard = state.items[deletedIndex];
  const newState = {
    items: filteredItems,
    totalAmount: state.totalAmount - deletedCard.amount * deletedCard.price,
  };

  setLocalStorageItem("cartItems", newState);
  return newState;
};

export const clearCartHandler = (): ICartContextState => {
  localStorage.clear();
  return {
    items: [],
    totalAmount: 0,
  };
};
