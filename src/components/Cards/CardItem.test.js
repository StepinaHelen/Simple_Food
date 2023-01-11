import { render, screen } from "test-utils";
import userEvent from "@testing-library/user-event";
import CardItem from "./CardItem";

import CartContext from "store/cart-context";
import CartList from "components/Cart/CartList";
import { cardItem, mockTitle } from "common/test-constants";

describe("test CardItem", () => {
  it("CardItem renders", () => {
    render(<CardItem {...cardItem} />);
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img.src).toContain(
      "https://www.eatwell101.com/wp-content/uploads/2018/04/Shrimp-Zucchini-Noodles.jpg"
    );
  });

  it("CardItem renders without data", () => {
    render(<CardItem />);
    expect(screen.queryByText(mockTitle)).toBeNull();
  });

  it("CardItem snapshot", () => {
    const view = render(<CardItem {...cardItem} />);
    expect(view).toMatchSnapshot();
  });

  it("CardItem snapshot with empty data", () => {
    const view = render(<CardItem />);
    expect(view).toMatchSnapshot();
  });

  it("click on the increment", async () => {
    render(<CardItem {...cardItem} />);
    const incrementBtn = screen.getByRole("button", { name: "+" });
    const value = await screen.findByTestId("value");
    expect(value.textContent).toContain("1");
    await userEvent.click(incrementBtn);
    expect(value.textContent).toContain("2");
  });

  it("click on the decrement", async () => {
    render(<CardItem {...cardItem} />);
    const incrementBtn = screen.getByRole("button", { name: "-" });
    const value = await screen.findByTestId("value");
    expect(value.textContent).toContain("1");
    userEvent.click(incrementBtn);
    expect(value.textContent).toContain("1");
  });

  it("click on the Add button", async () => {
    const addItem = jest.fn();
    render(
      <CartContext.Provider
        value={{
          addItem,
        }}
      >
        <CardItem {...cardItem} />
        <CartList />
      </CartContext.Provider>
    );
    userEvent.click(screen.getByText(/Add/));
    expect(addItem).toHaveBeenCalledTimes(1);
  });
});
