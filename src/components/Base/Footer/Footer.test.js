import { render, screen } from "test-utils";
import Footer from "./Footer";
describe("test Footer", () => {
  it("Footer renders", () => {
    render(<Footer />);
  });
  it("Footer snapshot", () => {
    const view = render(<Footer />);
    expect(view).toMatchSnapshot();
  });
  it("check Footer text", () => {
    render(<Footer />);
    expect(screen.getByText("Stepina Helen")).toBeInTheDocument();
  });
});
