import { Route, Routes } from "react-router-dom";
import useSticky from "./Hooks/UseSticky";
import Navbar from "./Pages/Navbar/Navbar";
import Hero from "./Pages/Hero/Hero";
import Active from "./Axtive";
import Button from "./ToggleClick/Button";
import ClickandScroll from "./Component/HorizontalScroll";
import HorizontalScrollComponent from "./Component/horizontalScroll+button";
import Product from "./Pages/Product/products";
import SignIn from "./Onboarding/signin";
import TimerModal from "./Onboarding/on";
import About from "./Pages/About";
import Cards from "./Pages/Cards/cards";
import SpecialOffer from "./Pages/SpecialOffer";
import Customer from "./Pages/CustomerReview/Customer";
import Subscribe from "./Pages/Subscribe/Subscribe";
import Footer from "./Pages/Footer/footer";
import CreateComment from "./Tweet/createComment";
import NewComment from "./Tweet/newComment";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <About />
      <Cards />
      <SpecialOffer />
      <Customer />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
