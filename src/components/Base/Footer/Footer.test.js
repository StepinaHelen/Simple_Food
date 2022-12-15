import { render } from "../../../test-utils";
import Footer from "./Footer";
describe("test Footer", () => {
  it("Footer renders", () => {
    render(<Footer />);
  });
  it("Footer snapshot", () => {
    const view = render(<Footer />);
    expect(view).toMatchSnapshot();
  });
});
