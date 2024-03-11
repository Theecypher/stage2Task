import { FaArrowRight } from "react-icons/fa";
import Button from "../Component/Button";
import img2 from "../assets/offer.svg";

const SpecialOffer = () => {
  return (
    <div className="flex md:border-red-600 border border-green-700 flex-col justify-center items-center gap-2 mt-[80px] md:items-start md:mx-14">
      {/* <div className="flex-1"> */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[45px] font-bold w-full">
          {" "}
          <span className="text-[#ff4040] font-bold">Special</span> Offers
        </h2>
        <p className="mt-5 w-[306px] md:w-full text-[20px] font-extralight">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="mt-5 mb-8 w-[306px] md:w-full text-[20px] font-extralight">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
      </div>

      <div className="block md:flex gap-2">
        <Button
          text="Shop now"
          redButton="true"
          icon={
            <FaArrowRight className="bg-white p-1 w-[20px] h-[20px] rounded-full text-[#ff4040]" />
          }
        />
        <Button text="learn more" />
      </div>

      <img
        src={img2}
        width={760}
        height={730}
        className="mt-12 md:mt-5 self-center"
        alt=""
      />
      {/* </div> */}
    </div>
  );
};

export default SpecialOffer;
