import { ReactNode } from "react";

export interface ITYPES_LIST {
  addItem: string;
  removeItem: string;
  clearCart: string;
}

export interface IROUTES {
  cartPage: string;
  orderPage: string;
  orderHistoryPage: string;
}

export interface IKEYQUERIES {
  orders: string;
  cards: string;
  orderHistoryPage: string;
}

export interface IFORMS_FIELD_ITEM {
  id: number;
  name: keyof IForm;
  title: string;
}

export interface ICardItem {
  id: number;
  title: string;
  price: number;
  category: string;
  amount: number;
  img: string;
}

export interface IOrdersHistoryItem {
  id: number;
  name: string;
  surName: string;
  phone: string;
  city: string;
  street: string;
  date: string;
  items: ICardItem[];
  totalAmount: number;
}

export interface IForm {
  name: string;
  surName: string;
  phone: string;
  city: string;
  street: string;
  date?: string;
}

export interface ICartContextState {
  items: ICardItem[];
  totalAmount: number;
}

export interface ICartContext {
  items: ICardItem[];
  totalAmount: number;
  addItem: (item: ICardItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

export interface IOrders {
  orderItems: ICardItem[];
}

export interface IOrdersQuery {
  data: IOrdersHistoryItem[];
}

export interface IOrdersPageProps {
  orderItems: ICardItem[];
  totalAmount: number;
}

export interface IPost_Query_Form {
  form: IForm;
  cartContext: ICartContextState;
}

export interface ISVG {
  name: string;
  classes: string;
}

export interface IBtnProps {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  children?: ReactNode;
  min?: string;
}

export interface IModalProps {
  onCloseModal: () => void;
  title?: string;
  message?: string;
}

export interface ICommonContainerProps {
  withMargin: boolean;
  children: ReactNode;
}

export interface IShadowContainerProps {
  withShadow: boolean;
  children: ReactNode;
}
