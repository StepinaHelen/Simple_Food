import { createContext } from "react";
import { ICardItem, ICartContext } from "../common/interfaces";

const CartContext = createContext<ICartContext>({
  items: [],
  totalAmount: 0,
  addItem: (item: ICardItem) => {},
  removeItem: (id: number) => {},
  clearCart: () => {},
});

export default CartContext;
