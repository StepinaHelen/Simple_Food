import { render, screen } from "../../test-utils";
import CartList from "./CartList";
import CartContext from "../../store/cart-context";

const moсkedList = [
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

const Wrapper = ({ children, removeItem, items }) => (
  <CartContext.Provider
    value={{
      removeItem,
      items,
    }}
  >
    {children}
  </CartContext.Provider>
);

describe("CartList", () => {
  it("render CartList", () => {
    render(<CartList />);
  });

  it("render Card list correctly", async () => {
    render(
      <Wrapper items={moсkedList}>
        <CartList />
      </Wrapper>
    );

    const text = await screen.findByText("Noodles with shrimp");

    expect(text).toBeInTheDocument();
  });

  it("render message that we don't have any orders", async () => {
    const moсkedList = [];
    render(
      <Wrapper items={moсkedList}>
        <CartList />
      </Wrapper>
    );

    const text = await screen.findByText(
      "You don't have any items in your cart!"
    );

    expect(text).toBeInTheDocument();
  });
});
