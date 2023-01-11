import { render } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./styles/theme";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <QueryClientProvider contextSharing={true} client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
