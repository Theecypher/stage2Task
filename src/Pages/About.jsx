import Button from "../Component/Button";
import { FaArrowCircleRight } from "react-icons/fa";
import img from "../assets/productShoe.svg";

const About = () => {
  return (
    <div className="mt-[100px] flex border border-black flex-col justify-center items-center">
      <div className="flex justify-between">
        <div>
        <h2 className="text-[44px] font-bold w-[306px]">
          We Provide You <span className="text-red-500">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="w-[306px] font-light my-[17px] text-base">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="w-[306px] font-light text-base">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button text="View details" />
        </div>

        <div>
          <img src={img} className="w-[306px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
