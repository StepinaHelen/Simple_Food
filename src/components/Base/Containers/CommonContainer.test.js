import { render } from "@testing-library/react";
import CommonContainer from "./CommonContainer";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "../../../styles/theme";

test("renders Common Container", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <CommonContainer />
    </ThemeProvider>
  );
});
