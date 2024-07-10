import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import naira from "../../assets/naira.png";
import round from "../../assets/round.svg"
import round1 from "../../assets/round2.png"

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

  const paymentList = ["Pay with Card", "Pay with Transfer", "Pay with USSD"];

  return (
    <>
      <div className="px-3 mt-14 md:px-[150px]">
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

          <div className="bg-[#454A68] relative py-5 px-2 md:px-10 text-white">
            <div>
              <h2 className="text-[10px] font-bold md:text-2xl">
                Order Summary
              </h2>
              <div>
                {cartItems.map((item, index) => (
                  <div key={index} className="flex gap-4 my-5">
                    <img className="w-[50px]" src={item.img} alt="" />
                    <div>
                      <h5 className="text-[9px] md:text-sm">{item.name}</h5>
                      <div className="flex gap[1px]">
                        <h5 className="text-[9px] md:text-sm">
                          {item.quantity}
                        </h5>
                        <h5 className="text-[9px] md:text-sm">X</h5>
                        <h5 className="text-[9px] md:text-sm">{item.price}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-[10px] mb-10">
              <div className="flex justify-end gap-12 items-end">
                <div className="flex flex-col gap-4">
                  <h5 className="text-[9px]">Subtotal</h5>
                  <h5 className="text-[9px]">Delivery Fee</h5>
                  <h5 className="text-[9px]">Total</h5>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-[2px]">
                    <img src={naira} alt="" />
                    <h5 className="text-[9px] md:text-sm">{getCartTotal()}</h5>
                  </div>

                  <div className="flex items-center gap-[2px]">
                    <img src={naira} alt="" />
                    <h5 className="text-[9px] md:text-sm">10,000</h5>
                  </div>

                  <div className="flex items-center gap-[2px]">
                    <img src={naira} alt="" />
                    <h5 className="text-[9px] md:text-sm">
                      {addDeliveryFee()}
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <Link>
              <button className="absolute text-[9px] md:text-sm bottom-0 left-0 p-3 w-full bg-[#D9D9D9] text-black">
                Contine Payment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutDetails;
