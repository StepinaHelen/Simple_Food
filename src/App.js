import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { QueryClient, QueryClientProvider } from "react-query";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Header from "./components/Base/Header/Header";
import Footer from "./components/Base/Footer/Footer";
import MainPage from "./components/Pages/MainPage";
import CartContextProvider from "./store/CartContextProvider";
import CartList from "./components/Cart/CartList";
import OrderPage from "./components/Pages/OrderPage";
import OrdersHistoryItem from "./components/Orders/OrdersHistoryItem";
import { baseTheme, darkTheme } from "./styles/theme";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "./services/persistence-service";

import GlobalStyles from "./styles/global";

import { ROUTES } from "./common/constants";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App() {
  const localTheme = getLocalStorageItem("theme");
  const [theme, setTheme] = useState(localTheme ? localTheme : "light");
  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    setLocalStorageItem("theme", theme);
  };

  useEffect(() => {
    localTheme && changeTheme();
  }, []);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : baseTheme}>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <GlobalStyles />
        <CartContextProvider>
          <ToastContainer />
          <BrowserRouter>
            <Header changeTheme={changeTheme} theme={theme} />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path={ROUTES.cartPage} element={<CartList />} />
              <Route path={ROUTES.orderPage} element={<OrderPage />} />
              <Route
                path={ROUTES.orderHistoryPage}
                element={<OrdersHistoryItem />}
              />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
