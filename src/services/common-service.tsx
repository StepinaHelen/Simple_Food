import axios from "axios";
import { getLocalStorageItem } from "services/persistence-service";
import {
  ICardItem,
  IOrdersHistoryItem,
  IPost_Query_Form,
} from "common/interfaces";

import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../src/firebase";

export const postOrderToHistory = async ({
  form,
  cartContext,
}: IPost_Query_Form): Promise<any> => {
  const docRef = await addDoc(collection(db, "ordersHistory"), {
    firstName: form.name,
    lastName: form.surName,
    phone: form.phone,
    city: form.city,
    street: form.street,
    foods: cartContext.items,
    totalAmount: cartContext.totalAmount,
    date: new Date(),
  });

  return docRef;
};

export const getOrders = async () => {
  return await getDocs(collection(db, "ordersHistory")).then(
    (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return newData;
    }
  );
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

  return await getDocs(collection(db, "foods")).then((querySnapshot: any) => {
    const newData = querySnapshot.docs.map((doc: any) => ({
      ...doc.data(),
      id: doc.id,
    }));
    let results = [];
    if (category === "All" || category === null) {
      results = newData;
    } else {
      const result = newData.filter(
        (el: any) => el.category === category.toLowerCase()
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
