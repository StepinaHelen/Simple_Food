import { render } from "../../../test-utils";
import Header from "./Header";
describe("test Footer", () => {
  it("Header renders", () => {
    render(<Header />);
  });
  it("Header snapshot", () => {
    const view = render(<Header />);
    expect(view).toMatchSnapshot();
  });
});
