import OrderPage from "components/Pages/OrderPage";
import { render, screen } from "test-utils";

describe("test OrderPage", () => {
  it("render OrderPage", async () => {
    render(<OrderPage />);
  });

  it("render OrderPage with data", async () => {
    render(
      <>
        <OrderPage />
        <div id="overlay"></div>
      </>
    );

    expect(screen.getByText("Order summaries:")).toBeInTheDocument();
    expect(screen.getByText("Order list:")).toBeInTheDocument();
  });
});
