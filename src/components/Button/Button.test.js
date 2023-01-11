import { render } from "test-utils";
import Button from "components/Button/Button";
describe("test Button", () => {
  it("Button renders", () => {
    render(<Button />);
  });
  it("Button snapshot", () => {
    const view = render(<Button />);
    expect(view).toMatchSnapshot();
  });
});
