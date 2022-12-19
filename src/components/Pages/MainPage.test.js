import MainPage from "./MainPage";
import { render } from "../../test-utils";

describe("test MainPage", () => {
  it("render MainPage", async () => {
    render(<MainPage />);
  });
});
