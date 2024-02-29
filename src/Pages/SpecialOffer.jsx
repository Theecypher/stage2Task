import { FaArrowRight } from "react-icons/fa";
import Button from "../Component/Button";
import img2 from "../assets/offer.svg"

const SpecialOffer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-[80px]">
      <div className="w-[306px]">
        <h2 className="text-4xl">
          {" "}
          <span className="text-[#ff4040] text-4xl font-bold">
            Special
          </span>{" "}
          Offers
        </h2>
        <p className="mt-4 text-[18px] font-extralight">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="mt-3 text-[18px] font-extralight">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <Button
          text="Shop now"
          icon={
            <FaArrowRight className="bg-white p-1 w-[20px] h-[20px] rounded-full text-[#ff4040]" />
          }
        />
        <button className="border border-gray-600 ext-lg py-3 flex justify-center items-center px-9 rounded-[30px]">
          Learn more
        </button>

        <img src={img2}
         width={773}
         height={687}
         className="object-contain w-full mt-12"
         alt="" />
      </div>
    </div>
  );
};

export default SpecialOffer;
