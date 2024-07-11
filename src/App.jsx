import { Route, Router, Routes } from "react-router";
import Header from "./Pages/Header/Header";
import Navbar from "./Pages/Navbar/Navbar";
import ProductPage from "./Pages/ProductPage/ProductPage";
import ProductDisplay from "./Pages/ProductDisplay/ProductDisplay";
import Cart from "./Pages/Cart/Cart";
import FooterMobile from "./Pages/Footer/FooterMobile";
import SectionFooter from "./Pages/Footer/SectionFooter";
import Checkout from "./Pages/Checkout/Checkout";
import { useContext } from "react";
import { ModalContext } from "./Context/ModalContext";
import Payment from "./Pages/Checkout/CheckoutPayment";

const App = () => {
  const { openModal } = useContext(ModalContext)
  
  return (
    <div className={openModal ? "bg-[#030b26] z-50 h-full fixed w-full" : ""}>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/display" element={<ProductDisplay />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <SectionFooter />
    </div>
  );
};

export default App;
