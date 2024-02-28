import { AiFillShopping, AiFillPayCircle } from "react-icons/ai";
import { FaHandHoldingHeart } from "react-icons/fa";

const cardData = [
  {
    icon: <AiFillShopping className="text-white p-1 text-3xl bg-red-500" />,
    name: "Free Shipping",
    desc: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    icon: <AiFillPayCircle  className="text-white p-1 text-3xl bg-red-500"/>,
    name: "Secure Payment",
    desc: "Experience worry-free transactions with our secure payment options.",
  },
  {
    icon: <FaHandHoldingHeart className="text-white p-1 text-3xl bg-red-500" />,
    name: "Love to help you",
    desc: "Our dedicated team is here to assist you every step of the way.Our dedicated team is here to assist you every step of the way.",
  },
];

export default cardData;
