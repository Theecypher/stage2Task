import { Link } from "react-router-dom";
import { Navlinks } from "../Navbar/Navlinks";

const links = [
    { title: "All products", to: "/" },
    { title: "Laptop", to: "/" },
    { title: "Phones", to: "/" },
    { title: "Accessories", to: "/" },
    // "home", "Phones", "", "About us"
  ];

const Header = () => {
  return (
    <div className="flex w-[90%] items-center justify-between pt-8 pb-3 mx-auto border-b">
      {links.map((item, index) => (
        <ul key={index} className="flex ">
          <li className="px-3">
            <Link className="text-[10px] text-[#000] font-normal leading-3" to={item.to}>{item.title}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Header;
