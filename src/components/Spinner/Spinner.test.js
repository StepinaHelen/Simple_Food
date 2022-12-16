import { render } from "../../test-utils";
import Spinner from "./Spinner";
describe("test Spinner", () => {
  it("Spinner renders", () => {
    render(<Spinner />);
  });
  it("Spinner snapshot", () => {
    const view = render(<Spinner />);
    expect(view).toMatchSnapshot();
  });
});
