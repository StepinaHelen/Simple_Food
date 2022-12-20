export const cardItem = {
  id: 15,
  title: "Noodles with shrimp",
  price: 25,
  category: "noodles",
  amount: 1,
  img: "https://www.eatwell101.com/wp-content/uploads/2018/04/Shrimp-Zucchini-Noodles.jpg",
};

export const mockTitle = "Noodles with shrimp";

export const mockedData = {
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

export const mockedLists = [
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

export const mockedOrdersHistory = [
  {
    name: "Helen",
    surName: "Stepina",
    phone: "phone",
    city: "Wroclaw",
    street: "lotnicza",
    date: new Date(),
    items: mockedLists,
    totalAmount: 50,
  },
];
export const form = {
  name: "Helen",
  surName: "Stepina",
  phone: "phone",
  city: "Wroclaw",
  street: "lotnicza",
  date: new Date(),
};

export const cartContext = {
  items: mockedLists,
  totalAmount: 50,
};

export const newOrderToHistory = {
  name: "Olena",
  surName: "Stopina",
  phone: "0973601111",
  city: "Wroclaw",
  street: "Lotnicza",
  date: new Date(),
  items: mockedLists,
  totalAmount: 50,
};
