import { render } from "@testing-library/react";
import ShadowContainer from "components/Base/Containers/ShadowContainer";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "styles/theme";
test("renders Shadow Container", () => {
  render(<ShadowContainer />);
});
