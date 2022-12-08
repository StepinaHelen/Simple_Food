import axios from "axios";

export const postOrderToHistory = async (form, cartContext) => {
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

export const getCards = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/foods`);
};

export const getFilteredCards = (category) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/foods`).then((res) => {
    if (category === "All") {
      return res.data;
    } else {
      const result = res.data.filter(
        (el) => el.category === category.toLowerCase()
      );
      return result;
    }
  });
};
