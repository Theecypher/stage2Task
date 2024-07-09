import { Link, NavLink } from "react-router-dom";
import { Navlinks } from "./Navlinks";
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#081142] text-[#fff] px-3 md:px-8 py-[10px] md:py-[45px]">
      <Link className="italic text-xs md:text-xl">TechDepot</Link>

      <div className="bg-white flex md:hidden items-center">
        <input
          type="text"
          className=" placeholder-black outline-none border-none"
          placeholder="search"
        />
        <img src={search} className="text-black" alt="" />
        <AiOutlineSearch className="text-black font-extralight" />
      </div>

      <div className="hidden md:flex justify-between">
        {Navlinks.map((item, index) => (
          <ul key={index} className="flex items-center">
            <li className="px-2 text-xs md:text-base">
              <Link to={item.to}>{item.title}</Link>
            </li>
          </ul>
        ))}
      </div>

      <div className="flex gap-[10px] justify-between">
        <img src={search} sizes="18" alt="" className="hidden md:block" />
        <NavLink to="cart">
          <img src={cart} sizes="18" alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
