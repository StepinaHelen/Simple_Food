import { render, screen } from "test-utils";
import Hero from "./Hero";

const mockDescription = "Delicious Food, Delivered To You";
describe("test Hero", () => {
  it("Hero renders", () => {
    render(<Hero />);
    expect(screen.getByText(mockDescription)).toBeInTheDocument();
  });
});
