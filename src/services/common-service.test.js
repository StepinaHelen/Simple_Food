import {
  getCards,
  getOrders,
  postOrderToHistory,
  multiSortHandler,
} from "./common-service";

import { rest } from "msw";
import { setupServer } from "msw/node";

const mockedLists = [
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

const mockedOrdersHistory = [
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
const form = {
  name: "Helen",
  surName: "Stepina",
  phone: "phone",
  city: "Wroclaw",
  street: "lotnicza",
  date: new Date(),
};
const cartContext = {
  items: mockedLists,
  totalAmount: 50,
};

const newOrderToHistory = {
  name: "Helen2",
  surName: "Stepina2",
  phone: "phone2",
  city: "Wroclaw2",
  street: "lotnicza2",
  date: new Date(),
  items: mockedLists,
  totalAmount: 50,
};

const server = setupServer(
  rest.get("http://localhost:3000/foods", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedLists));
  }),
  rest.get("http://localhost:3000/orders", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedOrdersHistory));
  }),
  rest.post("http://localhost:3000/orders", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...newOrderToHistory, id: 11 }));
  })
);
beforeAll(() => {
  server.listen();
});
afterAll(() => {
  server.close();
});

describe("cardList", () => {
  it("renders cardList from db.json", async () => {
    const result = await getCards();
    expect(result[0].img).toEqual(mockedLists[0].img);
    expect(result[0].title).toEqual(mockedLists[0].title);
  });

  it("renders filtered cardList", async () => {
    const result = await getCards("Pizza");
    expect(result).toEqual([
      {
        id: 16,
        title: "Hawaiian pizza",
        price: 25,
        category: "pizza",
        amount: 1,
        img: "https://distfood.ru/upload/medialibrary/86a/86ab43892301045cb950f9874be29805.jpg",
      },
    ]);
  });

  it("renders history orders from db.json", async () => {
    const result = await getOrders();
    expect(result.data[0].name).toEqual(mockedOrdersHistory[0].name);
    expect(result.data[0].surName).toEqual(mockedOrdersHistory[0].surName);
  });

  it("push order to  history orders", async () => {
    const result = await postOrderToHistory({ form, cartContext }).then(
      (res) => res.data
    );
    expect(result.id).toBeDefined();
    expect(result.name).toBe(newOrderToHistory.name);
    expect(result.surName).toBe(newOrderToHistory.surName);
  });

  it("test multisortFunc in alfabetic orders", async () => {
    const result = multiSortHandler(1, -1, mockedLists);
    expect(result).toEqual(mockedLists);
  });

  it("test multisortFunc in unalfabetic orders", async () => {
    const result = multiSortHandler(-1, 1, mockedLists);
    expect(result).toEqual(mockedLists.reverse());
  });
});
