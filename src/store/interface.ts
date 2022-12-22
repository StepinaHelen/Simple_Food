import { ICardItem } from "../common/interfaces";

export enum ICardActionTypes {
  addItem = "ADD_ITEM",
  removeItem = "REMOVE_ITEM",
  clearCart = "CLEAR_CART",
}

export interface IAddToCart {
  type: ICardActionTypes.addItem;
  item: ICardItem;
}

export interface IClearCart {
  type: ICardActionTypes.clearCart;
}

export interface IRemoveItem {
  type: ICardActionTypes.removeItem;
  id: number;
}

export type CartActions = IClearCart | IRemoveItem | IAddToCart;
