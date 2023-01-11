import Modal from "components/Modals/Modal";
import { render, screen } from "test-utils";

const mockekData = {
  title: "Modal text",
  message: "Modal message",
};

describe("test Modal", () => {
  it("render Modal", async () => {
    render(<Modal />);
  });
  it("render Modal with props", async () => {
    render(<Modal {...mockekData} />);
    expect(screen.getByText("Modal text")).toBeInTheDocument();
  });
});
