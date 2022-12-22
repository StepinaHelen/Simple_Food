import {
  ICartContextState,
  IForm,
  ICardItem,
  IOrdersHistoryItem,
  IOrders,
} from "./interfaces";

export const cardItem: ICardItem = {
  id: 15,
  title: "Noodles with shrimp",
  price: 25,
  category: "noodles",
  amount: 1,
  img: "https://www.eatwell101.com/wp-content/uploads/2018/04/Shrimp-Zucchini-Noodles.jpg",
};

export const mockTitle: string = "Noodles with shrimp";

export const mockedData: IOrders = {
  orderItems: [
    {
      id: 15,
      title: "Noodles with shrimp",
      price: 25,
      category: "noodles",
      amount: 1,
      img: "https://www.eatwell101.com/wp-content/uploads/2018/04/Shrimp-Zucchini-Noodles.jpg",
    },

    {
      id: 16,
      title: "Hawaiian pizza",
      price: 25,
      category: "pizza",
      amount: 1,
      img: "https://distfood.ru/upload/medialibrary/86a/86ab43892301045cb950f9874be29805.jpg",
    },
  ],
};

export const mockedLists: ICardItem[] = [
  {
    id: 15,
    title: "Noodles with shrimp",
    price: 25,
    category: "noodles",
    amount: 1,
    img: "https://www.eatwell101.com/wp-content/uploads/2018/04/Shrimp-Zucchini-Noodles.jpg",
  },
  {
    id: 16,
    title: "Hawaiian pizza",
    price: 25,
    category: "pizza",
    amount: 1,
    img: "https://distfood.ru/upload/medialibrary/86a/86ab43892301045cb950f9874be29805.jpg",
  },
];

export const mockedOrdersHistory: IOrdersHistoryItem[] = [
  {
    id: 1,
    name: "Helen",
    surName: "Stepina",
    phone: "phone",
    city: "Wroclaw",
    street: "lotnicza",
    date: "Wed Dec 21 2022 12:18:55 GMT+0100 (Central European Standard Time)",
    items: mockedLists,
    totalAmount: 50,
  },
];
export const form: IForm = {
  name: "Helen",
  surName: "Stepina",
  phone: "phone",
  city: "Wroclaw",
  street: "lotnicza",
  date: "22 Jan",
};

export const cartContext: ICartContextState = {
  items: mockedLists,
  totalAmount: 50,
};

export const newOrderToHistory = {
  name: "Olena",
  surName: "Stopina",
  phone: "0973601111",
  city: "Wroclaw",
  street: "Lotnicza",
  date: "Wed Dec 21 2022 12:18:55 GMT+0100 (Central European Standard Time)",
  items: mockedLists,
  totalAmount: 50,
};
