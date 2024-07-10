import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import naira from "../../assets/naira.png";
import cancel from "../../assets/cancel.svg"
import { ModalContext } from "../../Context/ModalContext";

const CheckoutPayment = () => {
  const { addDeliveryFee } = useContext(CartContext);
  const { closeModalFuncn  } = useContext(ModalContext);

  return (
    <div className="fixed flex flex-col md:px-5 mx-0 py-8 justify-center items-center bg-white top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
      <div className="flex justify-between items-center  pt-5 pb-3">
        <h2 className="text:sm md:text-[18px] font-bold">Pay with Card</h2>
        <img src={cancel}  onClick={() => closeModalFuncn()} alt="" />
      </div>

      <div className="flex flex-col gap-4 px-5">
        <input
          type="text"
          className="border-2 outline-none border-black py-2 md:px-1"
          placeholder="Enter Card Number"
        />

        <div className="flex">
          <input
            type="text"
            className="border-2 outline-none border-black py-2 md:px-1"
            placeholder="MM/YYYY"
          />
          <input
            type="text"
            className="border-2 outline-none border-black py-2 md:px-1"
            placeholder="CVV"
          />
        </div>

        <Link className="flex items-center justify-center gap-2 text-xs md:text-xl bg-[#081142] text-white py-3 px-5">
          Pay
          <div className="flex items-center justify-center">
            <img src={naira}  />
            <button className="">{addDeliveryFee()}</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPayment;
