import { Link, NavLink } from "react-router-dom";
import { Navlinks } from "./Navlinks";
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import contact from "../../assets/Vector1.png";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#081142] text-[#fff] px-3 md:px-8 py-[10px] md:py-[25px]">
      <Link className="italic text-xs md:text-xl">TechDepot</Link>

      <div className="bg-white flex items-center justify-between md:px-5 py-[5px]">
        <input
          type="text"
          className=" placeholder-black outline-none border-none"
          placeholder="search"
        />
        <img src={search} className="text-black" alt="" />
        <AiOutlineSearch className="text-black font-extralight" />
      </div>

      <div className="flex gap-[10px] justify-between">
        <NavLink to="cart">
          <img className="md:w-" src={cart} sizes="18" alt="" />
        </NavLink>
        <img src={contact} alt="" className="hidden md:block w-3" />
      </div>
    </div>
  );
};

export default Navbar;
