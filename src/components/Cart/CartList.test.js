import { render } from "../../test-utils";
import CartList from "./CartList";

// const mockSetState = jest.fn();

// jest.mock('react', () => ({
//   useState: initial => [initial, mockSetState]
// }));

describe("CartList", () => {
  it("render CartList", () => {
    render(<CartList />);
  });
});
