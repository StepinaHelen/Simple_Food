import {
  ITYPES_LIST,
  IROUTES,
  IKEYQUERIES,
  IFORMS_FIELD_ITEM,
} from "./interfaces";

export const TYPES_LIST: ITYPES_LIST = {
  addItem: "ADD_ITEM",
  removeItem: "REMOVE_ITEM",
  clearCart: "CLEAR_CART",
};

export const CATEGORIES: string[] = [
  "All",
  "Pizza",
  "Sushi",
  "Drinks",
  "Noodles",
  "Salads",
];

export const ROUTES: IROUTES = {
  cartPage: "/cart",
  orderPage: "/order-page",
  orderHistoryPage: "/order-history",
};

export const KEYQUERIES: IKEYQUERIES = {
  orders: "orders",
  cards: "cards",
  orderHistoryPage: "/order-history",
};

export const FORMS_FIELD: IFORMS_FIELD_ITEM[] = [
  { id: 1, name: "name", title: "First Name" },
  { id: 2, name: "surName", title: "Last Name" },
  { id: 3, name: "phone", title: "Phone number" },
  { id: 4, name: "city", title: "City" },
  { id: 5, name: "street", title: "Street" },
];
