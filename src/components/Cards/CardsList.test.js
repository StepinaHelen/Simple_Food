import CardList from "./CardsList";
import { render, screen, waitFor } from "../../test-utils";
import userEvent from "@testing-library/user-event";

const mockTitle = "Noodles with shrimp";

describe("cardList", () => {
  it("render cardList", async () => {
    render(<CardList />);
    const text = await screen.findByText(mockTitle);
    expect(text).toBeInTheDocument();
  });
  it("test click on sort", async () => {
    render(<CardList />);
    const sortBtn = await screen.findByTestId("sort");
    userEvent.click(sortBtn);
    expect(JSON.parse(localStorage.getItem("sorting"))).toBeTruthy();
  });

  it("test click on filter setItem", async () => {
    render(<CardList />);
    const filterBtn = await screen.findByText("Pizza");
    userEvent.click(filterBtn);
    await waitFor(() => {
      expect(JSON.parse(localStorage.getItem("category"))).toStrictEqual(
        "Pizza"
      );
    });
  });
});
