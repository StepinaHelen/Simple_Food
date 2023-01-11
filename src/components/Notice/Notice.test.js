import { render, screen } from "test-utils";
import Notice from "components/Notice/Notice";

const mockNoticeData = { title: "Notice" };

describe("test Notice", () => {
  it("render notice title", () => {
    render(<Notice {...mockNoticeData} />);
    expect(screen.getByText(mockNoticeData.title)).toBeInTheDocument();
  });
  it("render notice img", () => {
    render(<Notice />);
    const img = screen.getByRole("img");
    expect(img.src).toContain("http://localhost/cat.png");
  });
});
