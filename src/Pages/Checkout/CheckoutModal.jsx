import { Link } from "react-router-dom";
import cancel from "../../assets/cancel.svg";
import naira from "../../assets/naira.png";
import { useContext, useState } from "react";
import { ModalContext } from "../../Context/ModalContext";
import { CartContext } from "../../Context/CartContext";
import { AiOutlineArrowLeft } from "react-icons/ai";

const CheckoutModal = () => {
  const { closeModalFuncn, openModal } = useContext(ModalContext);
  const { addDeliveryFee } = useContext(CartContext);
  //   const [hasPaid, setHasPaid] = useState(false);

  //   const hasPaidFunction = () =>  {
  //     setHasPaid(false)

  //     console.log(true);
  //   }

  return (
    <div>
      <Link
        to="/"
        onClick={() => handleFunction()}
        className="flex fixed top-[10%] text-white z-[100%] p-3 items-center"
      >
        <AiOutlineArrowLeft />
        <h5>Back</h5>
      </Link>
      <div className="flex flex-col justify-center absolute top-[50%] -translate-y-2/4 left-2/4 -translate-x-2/4 gap-[20px] w-[269px] md:w-[766px] p-[1.3rem] md:py-6 bg-white">
        <div className="flex justify-between">
          <h2 className="text:sm md:text-4xl font-bold">Pay with Card</h2>
          <img src={cancel} onClick={() => closeModalFuncn()} alt="" />
        </div>

        <div className="w-full flex flex-col gap-3 md:gap-10">
          <input
            type="text"
            className="border-2 outline-none p-2 md:p-4 border-black  w-full"
            placeholder="Enter Card Number"
          />

          <div className="flex">
            <input
              type="text"
              className="border-y-2 border-l-2 outline-none p-2 md:p-4 border-black w-full"
              placeholder="MM/YYYY"
            />
            <input
              type="text"
              className="border-2 outline-none p-2 md:p-4 border-black w-full"
              placeholder="CVV"
            />
          </div>
        </div>

        <Link className="flex items-center justify-center gap-2 text-xs md:text-xl bg-[#081142] text-white py-3 w-[150px] px-5 md:w-[400px] self-center">
          Pay
          <div className="flex items-center justify-center">
            <img src={naira} />
            <button className="">{addDeliveryFee()}</button>
          </div>
        </Link>
      </div>
      {/* {hasPaid ? (
        <div className="flex flex-col justify-center absolute top-[50%] -translate-y-2/4 left-2/4 -translate-x-2/4 gap-[20px] w-[269px] md:w-[766px] p-[1.3rem] md:py-6 bg-white">
          <div className="flex justify-between">
            <h2 className="text:sm md:text-4xl font-bold">Pay with Card</h2>
            <img src={cancel} onClick={() => closeModalFuncn()} alt="" />
          </div>

          <div className="w-full flex flex-col gap-3 md:gap-10">
            <input
              type="text"
              className="border-2 outline-none p-2 md:p-4 border-black  w-full"
              placeholder="Enter Card Number"
            />

            <div className="flex">
              <input
                type="text"
                className="border-y-2 border-l-2 outline-none p-2 md:p-4 border-black w-full"
                placeholder="MM/YYYY"
              />
              <input
                type="text"
                className="border-2 outline-none p-2 md:p-4 border-black w-full"
                placeholder="CVV"
              />
            </div>
          </div>

          <Link
            onClick={() => setHasPaid(true)}
            className="flex items-center justify-center gap-2 text-xs md:text-xl bg-[#081142] text-white py-3 w-[150px] px-5 md:w-[400px] self-center"
          >
            Pay
            <div className="flex items-center justify-center">
              <img src={naira} />
              <button className="">{addDeliveryFee()}</button>
            </div>
          </Link>
        </div>
      ) : (
        <Payment hasPaidFunction={hasPaidFunction} />
      )} */}
    </div>
  );
};

export default CheckoutModal;
