import { render, screen } from "../../test-utils";
import OrderList from "./OrderList";

const mockedData = {
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

describe("test OrderList", () => {
  it("render OrderList", async () => {
    render(<OrderList {...mockedData} />);
    expect(screen.getByText("Hawaiian pizza")).toBeInTheDocument();
  });
});
