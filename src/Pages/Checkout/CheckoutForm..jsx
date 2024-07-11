import { useState } from "react";
import CheckoutDetails from "./CheckoutDetails";
import round from "../../assets/round.svg";
import round1 from "../../assets/round2.png";


const CheckoutForm = () => {
  const [toPay, setToPay] = useState(false);
  const [toConfirm, setToConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    setToPay(true);
  };

  return (
    <>
      {!toPay ? (
        <>
          <div className="flex mt-3 mb-5 items-center justify-center gap-[1px]">
            <img src={round} alt="" />
            <p className="text-[8px] md:text-[18px] lg:text-[30px]">Shipping</p>
            <p className="w-[62px] md:w-[100px ] lg:w-[200px]  h-[1px] bg-[#081142]"></p>
            <img src={round1} alt="" />
            <p className="text-[8px] md:text-[18px] lg:text-[30px]">
              Payment Details
            </p>
            <p className="w-[62px] md:w-[100px] lg:w-[200px] h-[1px] bg-[#081142]"></p>
            <img src={round1} alt="" />
            <p className="text-[8px] md:text-[18px] lg:text-[30px]">
              Confirmation
            </p>
          </div>
          <div className=" text-white px-4 py-5 items-center justify-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[10px] px-4 py-7 bg-[#081142]"
            >
              <div className="flex gap-3">
                <div className="">
                  <label htmlFor="">Firstname</label>
                  <input
                    className="bg-white px-2 text-black py-[10px] outline-none w-full md:w-[345px] border-none lg:w-[46vw]"
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="">Lastname</label>
                  <input
                    className="bg-white px-2 text-black py-[10px] outline-none border-none w-full md:w-[345px] lg:w-[46vw]"
                    type="text"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="">Address 1</label>
                <input
                  className="bg-white px-2 text-black border-none outline-none py-[10px] w-full"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="">Address 2</label>
                <input
                  className="bg-white px-2 border-none text-black outline-none py-[10px] w-full"
                  type="text"
                />
              </div>

         
              <div className="flex gap-3">
                <div className="">
                  <label htmlFor="">City</label>
                  <input
                    className="bg-white px-2 text-black py-[10px] outline-none w-full md:w-[345px] border-none lg:w-[46vw]"
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="">State</label>
                  <input
                    className="bg-white px-2 text-black py-[10px] outline-none border-none w-full md:w-[345px] lg:w-[46vw]"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="">
                  <label htmlFor="">Email Address</label>
                  <input
                    className="bg-white px-2 text-black py-[10px] outline-none w-full md:w-[345px] border-none lg:w-[46vw]"
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="">Phone Number</label>
                  <input
                    className="bg-white px-2 text-black py-[10px] outline-none border-none w-full md:w-[345px] lg:w-[46vw]"
                    type="text"
                  />
                </div>
              </div>

              <button className="self-end bg-white text-[#081142] py-[4px] px-7 mt-5 font-semibold">
                Next
              </button>
            </form>
          </div>
        </>
      ) : (
        <CheckoutDetails />
      )}
    </>
  );
};

export default CheckoutForm;
