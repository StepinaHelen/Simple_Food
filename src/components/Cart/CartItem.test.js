import { render, screen } from "../../test-utils";
import userEvent from "@testing-library/user-event";
import CartItem from "./CartItem";
import CartList from "./CartList";

import CartContext from "../../store/cart-context";

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

const mockedCartLists = {
  id: 15,
  title: "Noodles with shrimp",
  price: 25,
  category: "noodles",
  amount: 1,
  img: "https://www.eatwell101.com/wp-content/uploads/2018/04/Shrimp-Zucchini-Noodles.jpg",
};

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

const mockTitle = "Noodles with shrimp";

describe("test CartItem", () => {
  it("CartItem renders", () => {
    render(<CartItem {...mockedCartLists} />);
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img.src).toContain(
      "https://www.eatwell101.com/wp-content/uploads/2018/04/Shrimp-Zucchini-Noodles.jpg"
    );
  });

  it("CartItem renders without data", () => {
    render(<CartItem />);
    expect(screen.queryByText(mockTitle)).toBeNull();
  });

  it("CartItem snapshot", () => {
    const view = render(<CartItem {...mockedCartLists} />);
    expect(view).toMatchSnapshot();
  });

  it("CartItem snapshot with empty data", () => {
    const view = render(<CartItem />);
    expect(view).toMatchSnapshot();
  });

  it("click on the delete button", async () => {
    const removeItem = jest.fn((id) => {
      moсkedList = moсkedList.filter((el) => id !== el.id);
    });

    const { rerender } = render(
      <Wrapper removeItem={() => removeItem(15)} items={moсkedList}>
        <CartList />
      </Wrapper>
    );
    const text = await screen.findByText(mockTitle);
    expect(text).toBeInTheDocument();

    const deleteBtn = await screen.findAllByTestId("delete-btn");
    userEvent.click(deleteBtn[0]);

    expect(removeItem).toHaveBeenCalledTimes(1);
    expect(moсkedList).toHaveLength(1);
    rerender(
      <Wrapper func={() => removeItem(15)} items={moсkedList}>
        <CartList />
      </Wrapper>
    );
    expect(screen.queryByText(mockTitle)).toBeNull();
  });
});
