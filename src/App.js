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

import { ROUTES } from "./common/constants";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <ToastContainer />
        <BrowserRouter>
          <Header />
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
  );
}

export default App;
