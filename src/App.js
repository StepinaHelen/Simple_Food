import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Base/Header/Header";
import Footer from "./components/Base/Footer/Footer";
import MainPage from "./components/Pages/MainPage";
import CartContextProvider from "./store/CartContextProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CartContextProvider>
      <ToastContainer position="bottom-right" />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
