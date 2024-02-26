import Button from "../../Component/Button";
import Slide from "./Slide";

const Hero = () => {
  return (
    <main className="text-black">
      <section className="mt-[90px] px-[20px] ml-4">
        <p className="text-red-500  text-xl tracking-[1px]">
          Our Summer Collections
        </p>
        <h1 className="text-[70px] font-[700] leading-[120%] pt-[50px] w-[100%] tracking-[1.2px]">
          The New Arrival <span className="text-red-500">Nike</span> Shoes
        </h1>
        <p className="text-[20px] pt-[35px] leading-[150%] w-[90%] tracking-[0.87x] text-[#1e1e1e] opacity-[0.7] mb-[25px]">
          Discover stylish Nike arrivals, qualiy comfort, and innovation for
          your active life.
        </p>

        <Button text="Shop now" />

        <div className="grid grid-cols-2 gap-14 my-9">
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
