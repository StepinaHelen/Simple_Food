import { render, screen } from "test-utils";
import OrderList from "components/Orders/OrderList";
import { mockedData } from "common/test-constants";

describe("test OrderList", () => {
  it("render OrderList", async () => {
    render(<OrderList {...mockedData} />);
    expect(screen.getByText("Hawaiian pizza")).toBeInTheDocument();
  });
});
