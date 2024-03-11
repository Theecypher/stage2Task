import Button from "../../Component/Button";
import Slide from "./Slide";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <main className="text-black">
      <section className="mt-[90px] px-[20px] ml-4 md:ml-10">
        <p className="text-red-500  text-xl tracking-[1px]">
          Our Summer Collections
        </p>
        <h1 className="text-[70px] font-[700] leading-[120%] pt-[50px] w-[100%] tracking-[1.2px] md:w-[90%] md:text-[90px]">
          The New Arrival <span className="text-red-500">Nike</span> Shoes
        </h1>
        <p className="text-[20px] pt-[35px] leading-[150%] w-[90%] tracking-[0.87x] text-[#1e1e1e] opacity-[0.7] mb-[25px] md:w-[40%]">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button text="Shop now" redButton="true" icon={<FaArrowRight className="bg-white p-1 w-[20px] h-[20px] rounded-full text-[#ff4040]" />} />

        <div className="grid grid-cols-2 gap-14 my-9 md:grid-cols-3 md:gap-0">
          <div className="inline-block">
            <p className="text-4xl font-bold  ">1k+</p>
            <small className="text-[17px] opacity-[0.6]">Brands</small>
          </div>
          <div className="inline-block">
            <p className="text-4xl font-bold ">500+</p>
            <small className="text-[17px] opacity-[0.6]">Shoes</small>
          </div>
          <div className="inline-block">
            <p className="text-4xl font-bold ">250k+</p>
            <small className="text-[17px] opacity-[0.6]">Customers</small>
          </div>
        </div>
      </section>

      <Slide />
    </main>
  );
};

export default Hero;
