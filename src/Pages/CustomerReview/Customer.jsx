import CustomerData from "./CustomerCard";
import { FaHeart, FaStar } from "react-icons/fa";

const Customer = () => {
  return (
    <div className="flex flex-col bg-gray-100 py-4 justify-center text-center items-center mt-[100px]">
      <div className="w-[306px] my-10">
        <h2 className="text-5xl tracking-wide w-[80%] font-[600] mx-auto leading-[120%]">
          What Our <span className="text-[#ff4040]">Customers</span> Say?
        </h2>

        <p className="text-xl font-light opacity-70 text-[#1e1e1e] tracking-[0.015em]  w-[95%] my-5 mx-auto">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>

        <div className="mt-24">
          {CustomerData.map((element, index) => (
            <div key={index} className="flex gap-4 justify-center items-center flex-col mt-16">
            <img className="rounded-full" width={120} height={120} src={element.img} alt="" />
            <p className="w-[90%]">{element.review}</p>
            <h3 className="flex items-center gap-1 text-xl">
              <FaStar className="text-[#ff4040]" />
              {`(${element.rating})`}
            </h3>
            <h2 className="text-3xl font-bold">{element.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customer;
