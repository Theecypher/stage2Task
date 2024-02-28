import Button from "../Component/Button";
import { FaArrowCircleRight } from "react-icons/fa";
import img from "../assets/shoe4.svg"

const About = () => {
  return (
    <div className="mt-[60px]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[36px] font-bold w-[60%]">
          We Provide You <span className="text-red-500">Super Quality</span> Shoes
        </h2>
        <p className="w-[60%] my-[17px] text-sm">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="w-[60%] text-sm">Our dedication to detail and excellence ensures your satisfaction</p>
        <Button text="View details" />

        <div>
            <img src={img} className="w-[230px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
