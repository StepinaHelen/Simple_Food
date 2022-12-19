import OrderPage from "./OrderPage";
import { render, screen, waitFor, fireEvent } from "../../test-utils";
import userEvent from "@testing-library/user-event";
import CartContext from "../../store/cart-context";

let moсkedList = [
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

const Wrapper = ({ children, items, clearCart }) => (
  <CartContext.Provider
    value={{
      clearCart,
      items,
    }}
  >
    {children}
  </CartContext.Provider>
);
describe("test OrderPage", () => {
  it("render OrderPage", async () => {
    render(<OrderPage />);
  });

  it("click on order", async () => {
    const clearCart1 = jest.fn(() => {
      return (moсkedList = []);
    });

    const handleSubmit = jest.fn();

    render(
      <>
        <Wrapper items={moсkedList} clearCart={clearCart1}>
          <OrderPage onSubmit={handleSubmit} />
        </Wrapper>
        <div id="overlay"></div>
      </>
    );
    const orderBtn = await screen.findByRole("button", { name: "Order" });

    fireEvent.click(orderBtn);
    await waitFor(() => {
      expect(moсkedList).toHaveLength(0);
    });

    await waitFor(() => {
      expect(clearCart1).toHaveBeenCalledTimes(1);
    });
  });
});
