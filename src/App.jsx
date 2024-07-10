import { Route, Router, Routes } from "react-router";
import Header from "./Pages/Header/Header";
import Navbar from "./Pages/Navbar/Navbar";
import ProductPage from "./Pages/ProductPage/ProductPage";
import ProductDisplay from "./Pages/ProductDisplay/ProductDisplay";
import Cart from "./Pages/Cart/Cart";
import FooterMobile from "./Pages/Footer/FooterMobile";
import SectionFooter from "./Pages/Footer/SectionFooter";
import Checkout from "./Pages/Checkout/Checkout";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/display" element={<ProductDisplay />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <SectionFooter />
    </div>
  );
};

export default App;
