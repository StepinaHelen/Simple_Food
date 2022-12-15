import { render, screen, fireEvent } from "../../test-utils";
import userEvent from "@testing-library/user-event";
import CartItem from "./CartItem";

import CartContext from "../../store/cart-context";

const mockedCartLists = {
  id: 15,
  title: "Noodles with shrimp",
  price: 25,
  category: "noodles",
  amount: 1,
  img: "https://www.eatwell101.com/wp-content/uploads/2018/04/Shrimp-Zucchini-Noodles.jpg",
};

describe("test CartItem", () => {
  it("CartItem renders", () => {
    render(<CartItem {...mockedCartLists} />);
    expect(screen.getByText("Noodles with shrimp")).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img.src).toContain(
      "https://www.eatwell101.com/wp-content/uploads/2018/04/Shrimp-Zucchini-Noodles.jpg"
    );
  });

  it("CartItem renders without data", () => {
    render(<CartItem />);
    expect(screen.queryByText("Noodles with shrimp")).toBeNull();
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
    const removeItem = jest.fn();
    render(
      <CartContext.Provider
        value={{
          removeItem,
        }}
      >
        <CartItem />
      </CartContext.Provider>
    );
    const deleteBtn = await screen.findByTestId("delete-btn");
    userEvent.click(deleteBtn);
    expect(removeItem).toHaveBeenCalledTimes(1);
  });
});
