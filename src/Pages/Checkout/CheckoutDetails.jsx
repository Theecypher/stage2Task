import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import naira from "../../assets/naira.png";
import round from "../../assets/round.svg";
import round1 from "../../assets/round2.png";
import { ModalContext } from "../../Context/ModalContext";
import CheckoutModal from "./CheckoutModal";

const CheckoutDetails = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    ProductTotal,
    addDeliveryFee,
  } = useContext(CartContext);
  const { openModalFuncn, openModal } = useContext(ModalContext)

  const paymentList = ["Pay with Card", "Pay with Transfer", "Pay with USSD"];

  return (
    <div >
      <div className="flex mt-3 mb-5 items-center justify-center gap-[1px]">
        <img src={round1} alt="" />
        <p className="text-[8px] md:text-[18px] lg:text-[30px]">Shipping</p>
        <p className="w-[62px] md:w-[100px ] lg:w-[200px]  h-[1px] bg-[#081142]"></p>
        <img src={round} alt="" />
        <p className="text-[8px] md:text-[18px] lg:text-[30px]">
          Payment Details
        </p>
        <p className="w-[62px] md:w-[100px] lg:w-[200px] h-[1px] bg-[#081142]"></p>
        <img src={round1} alt="" />
        <p className="text-[8px] md:text-[18px] lg:text-[30px]">Confirmation</p>
      </div>

      <div className="px-3 mt-14 md:px-[70px] lg:px-[100px]">
        <div className="flex gap-10 justify-between">
          <div>
            <h3 className="font-bold text-xs md:text-3xl">Payment Options</h3>
            <div className="flex my-3 flex-col gap-4">
              {paymentList.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <input className="" type="radio" name="" id="" />
                  <label
                    className="text-[11px] font-semibold md:text-2xl"
                    htmlFor=""
                  >
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className={openModal ? "hidden" : "bg-[#454A68] relative py-5 px-2 md:px-10 text-white"}>
          {/* <div className="bg-[#454A68] relative py-5 px-2 md:px-10 text-white"> */}
            <div>
              <h2 className="text-[10px] font-semibold  md:text-2xl">
                Order Summary
              </h2>
              <div>
                {cartItems.map((item, index) => (
                  <div key={index} className="flex gap-4 my-5">
                    <img className="w-[50px]" src={item.img} alt="" />
                    <div>
                      <h5 className="text-[9px] md:text-xl lg:text-2xl">{item.name}</h5>
                      <div className="flex gap[1px]">
                        <h5 className="text-[9px] md:text-xl lg:text-2xl">
                          {item.quantity}
                        </h5>
                        <h5 className="text-[9px] md:text-xl lg:text-2xl">X</h5>
                        <h5 className="text-[9px] md:text-xl lg:text-2xl">{item.price}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-[10px] mb-10 md:mb-14">
              <div className="flex justify-end gap-12 items-end">
                <div className="flex flex-col gap-4">
                  <h5 className="text-[9px] md:text-xl lg:text-2xl">Subtotal</h5>
                  <h5 className="text-[9px] md:text-xl lg:text-2xl">Delivery Fee</h5>
                  <h5 className="text-[9px] md:text-xl lg:text-2xl">Total</h5>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-[2px]">
                    <img src={naira} alt="" />
                    <h5 className="text-[9px] md:text-xl lg:text-2xl">{getCartTotal()}</h5>
                  </div>

                  <div className="flex items-center gap-[2px]">
                    <img src={naira} alt="" />
                    <h5 className="text-[9px] md:text-xl lg:text-2xl">10,000</h5>
                  </div>

                  <div className="flex items-center gap-[2px]">
                    <img src={naira} alt="" />
                    <h5 className="text-[9px] md:text-xl lg:text-2xl">
                      {addDeliveryFee()}
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <Link>
              <button
              onClick={() => openModalFuncn()}
               className="absolute text-[9px] md:text-xl lg:text-3xl bottom-0 left-0 p-3 w-full bg-[#D9D9D9] text-black">
                Contine Payment
              </button>
            </Link>
          </div>
        </div>
      </div>

      {openModal && <CheckoutModal /> }
    </div>
  );
};

export default CheckoutDetails;
