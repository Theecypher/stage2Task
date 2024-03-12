import ProductData from "./productData";
import { FaStar } from "react-icons/fa";

const Product = () => {
  return (
    <div className="mt-[150px] flex flex-col justify-center items-center md:items-start mx-8">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[45px] leading-[120%] w-[306px] md:w-full font-[700]">
          Our <span className="text-[#ff4040]">Popular</span> Products
        </h2>
        <p className="text-[#1e1e1e] w-[306px] font-light text-[18px] opacity-90 mt-[25px] md:w-full">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12 md:gap-2">
        {ProductData.map((item, index) => (
          <article key={index}>
            <img src={item.img} className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] mb-5 lg:mb-1" alt="" />
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
