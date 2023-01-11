import axios from "axios";
import { getLocalStorageItem } from "services/persistence-service";
import {
  ICardItem,
  IOrdersHistoryItem,
  IPost_Query_Form,
} from "common/interfaces";

export const postOrderToHistory = async ({
  form,
  cartContext,
}: IPost_Query_Form): Promise<IOrdersHistoryItem> => {
  return await axios.post(`${process.env.REACT_APP_API_URL}/orders`, {
    name: form.name,
    surName: form.surName,
    phone: form.phone,
    city: form.city,
    street: form.street,
    items: cartContext.items,
    totalAmount: cartContext.totalAmount,
    date: new Date(),
  });
};

export const getOrders = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/orders`);
};

export const multiSortHandler = (
  positive: number,
  negative: number,
  cards: ICardItem[]
) => {
  return cards.sort(function (a, b) {
    if (a.title > b.title) {
      return positive;
    }
    if (a.title < b.title) {
      return negative;
    }
    return 0;
  });
};

export const getCards = async (inputCategory: string): Promise<ICardItem[]> => {
  const category = inputCategory || getLocalStorageItem("category") || null;
  const sorting = getLocalStorageItem("sorting");
  return await axios
    .get<ICardItem[]>(`${process.env.REACT_APP_API_URL}/foods`)
    .then((res) => {
      let results = [];
      if (category === "All" || category === null) {
        results = res.data;
      } else {
        const result = res.data.filter(
          (el) => el.category === category.toLowerCase()
        );
        results = result;
      }
      if (sorting === "ascending") {
        results = multiSortHandler(1, -1, results);
      } else {
        results = multiSortHandler(-1, 1, results);
      }
      return results;
    });
};
