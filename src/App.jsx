import { Route, Routes } from "react-router-dom";
import useSticky from "./Hooks/UseSticky";
import Navbar from "./Pages/Navbar/Navbar";
import Hero from "./Pages/Hero/Hero";
import Active from "./Axtive";
import Button from "./ToggleClick/Button";
import ClickandScroll from "./Component/HorizontalScroll";
import HorizontalScrollComponent from "./Component/horizontalScroll+button";
import Product from "./Pages/Product/products";

const App = () => {
  return (
    <div>
      {/* <div className="flex min-h-[100vh]  justify-center items-center font-sans text-[20px] m-0 bg-orange-500"> */}
      {/* <Active /> */}
      {/* <ClickandScroll /> */}
      <Navbar />
      <Hero />
      <Product />
      {/* <HorizontalScrollComponent /> */}
    </div>
  );
};

export default App;
