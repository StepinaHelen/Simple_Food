import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Header from "./components/Base/Header/Header";
import Footer from "./components/Base/Footer/Footer";
import MainPage from "./components/Pages/MainPage";
import CartContextProvider from "./store/CartContextProvider";
import CartList from "./components/Cart/CartList";

import { ROUTES } from "./common/constants";

function App() {
  return (
    <CartContextProvider>
      <ToastContainer position="bottom-right" />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path={ROUTES.cartPage} element={<CartList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
