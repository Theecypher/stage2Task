import { BiLink } from "react-icons/bi";
import { Link } from "react-router-dom";
import cart from "../assets/cart.svg";

const Button = ({ text, className, handleClick, isLogo }) => {
  return (
    <Link
      onClick={handleClick}
      className={`flex bg-[#081142] gap-[4px] w-[124px] py-[15px] px-[12px] justify-center rounded-[15px] ${className}`}
    >
      <p className="text-[#fff] font-bold text-xs leading-[14.52px]">{text}</p>
      {!isLogo && <img src={cart} sizes="14" alt="" />}
    </Link>
  );
};

export default Button;
