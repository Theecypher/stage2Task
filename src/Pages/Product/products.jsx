import ProductData from "./productData";
import { FaHeart, FaStar } from "react-icons/fa";

const Product = () => {
  return (
    <div className="mt-[150px]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[42px] w-[70%] leading-[120%] font-[700]">
          Our <span className="text-orange-600">Popular</span> Products
        </h2>
        <p className="w-[70%] text-[#1e1e1e] opacity-75 mt-[30px]">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-12 mt-12 ">
        {ProductData.map((item, index) => (
          <article>
            <img src={item.img} className="w-[250px] mb-5" alt="" />
            <div>
              <div className="flex gap-2 items-center">
                <FaStar className="text-red-600 text-xl" />
                <h5 className="text-xl font-light">{item.rating}</h5>
              </div>
              <h2 className="text-xl font-[600] my-[7px]">{item.name}</h2>
              <h2 className="text-red-500 text-xl font-[700]">{item.price}</h2>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Product;
