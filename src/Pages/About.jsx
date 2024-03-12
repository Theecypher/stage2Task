import Button from "../Component/Button";
import { FaArrowCircleRight } from "react-icons/fa";
import img from "../assets/productShoe.svg";

const About = () => {
  return (
    <div className="mt-[100px] flex flex-col justify-center items-center md:items-start md:mx-[70px]">
      <div className="flex justify-between flex-col lg:flex-row lg:items-center gap-5 lg:gap-1">
        <div className="flex flex-col gap-3">
          <h2 className="text-[44px] font-bold w-[306px] md:w-full lg:w-[510px] leading-normal">
            We Provide You <span className="text-red-500">Super Quality</span>{" "}
            Shoes
          </h2>
          <p className="w-[306px] font-light my-[17px] text-base md:w-[730px] lg:w-[510px] tracking-wide md:text-[19px] leading-7 lg:w-[]]">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="w-[306px] mb-10 font-light text-base md:text-[19px] lg:w-[510px] md:w-full leading-7">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <Button text="View details" redButton="true" />
        </div>

        <div>
          <img
            src={img}
            className="w-[306px] md:w-[570px] md:mx-auto md:mt-10 lg:mt-0"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
