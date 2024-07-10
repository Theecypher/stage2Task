import stars from "./stars.svg";
import { ProductsData } from "./ProductsData";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Button from "../../Component/Button";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import { CartContext } from "../../Context/CartContext";
import { useContext, useEffect, useState } from "react";

const Products = () => {
  const { cartItems, addToCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false)

  const added = (item) => {
    setShowModal(true)
    addToCart(item)
  }

  if (showModal) {
    setTimeout(() => {
      setShowModal(false)
    }, 2000);
  }

  return (
    <div className="mx-auto mt-[35px] md:px-[30px] w-[263px] md:w-full">
      <div className="gap-3 grid grid-cols-1 md:grid-cols-3">
        {ProductsData.map((item, index) => (
          <div className="my-4" key={index}>
            <img className="w-full" src={item.img} alt="" />
            <div className="flex items-center justify-between">
              <h4>{item.name}</h4>
              <AiFillHeart className="text-[18px] text-[#e1e1e1]" />
            </div>
            <p className="flex items-center">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.83329 11V1.87667C2.83323 1.68277 2.89758 1.49435 3.01623 1.34099C3.13487 1.18763 3.30109 1.07802 3.48879 1.02938C3.67649 0.98074 3.87502 0.995821 4.05322 1.07226C4.23141 1.14869 4.37917 1.28215 4.47329 1.45167L9.52662 10.5483C9.62074 10.7179 9.7685 10.8513 9.9467 10.9277C10.1249 11.0042 10.3234 11.0193 10.5111 10.9706C10.6988 10.922 10.865 10.8124 10.9837 10.659C11.1023 10.5057 11.1667 10.3172 11.1666 10.1233V1M1.16663 4.33333H12.8333M1.16663 7.66667H12.8333"
                  stroke="#081142"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="">{item.amount}</span>
            </p>
            <img src={stars} className="my-1" alt="" />
            <Button text="ADD TO CART" handleClick={() => added(item)} />
          </div>
        ))}
      </div>

      {showModal && <button className="bg-[#081142] text-white font-bold p-2 fixed top-[10%] right-5 z-10">Product added to cart</button>}
    </div>
  );
};

export default Products;
