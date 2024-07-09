import { useContext } from "react";
import CartHeader from "./CartHeader";
import { CartContext } from "../../Context/CartContext";
import close from "../../assets/cancel.svg";
import Button from "../../component/Button";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    ProductTotal,
    addDeliveryFee
  } = useContext(CartContext);

  return (
    <>
      <Link to="/" className="flex p-3 gap-1 items-center">
        <AiOutlineArrowLeft />
        <h5>Back</h5>
      </Link>

      <div className="mx-4 md:mx-7 my-8">
        <h2 className="text-center text-[#081142] font-bold text-xl">
          Shopping Cart
        </h2>
        {cartItems.length > 0 && (
          <>
            <CartHeader />

            <div className="mt-3 pb-3">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-[#000] gap-4 py-2"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={close}
                      onClick={() => removeFromCart(item)}
                      className=""
                      alt=""
                    />
                    <img className="w-[44.76] h-[50px]" src={item.img} alt="" />
                    <div className="my-0 md:my-auto">
                      <h5 className="text-[10px] font-bold">{item.name}</h5>
                      <h5 className="text-[10px]">Color: {item.color}</h5>
                      <h5 className="text-[10px]">{item.memory}</h5>
                    </div>
                  </div>

                  <div className="flex justify-between items-center gap-[15px] md:gap-[70px]">
                    <h5 className="text-xs font-bold">{item.amount}</h5>

                    <div className="h-[19px] w-[50px] text-[10px] font-bold">
                      <button
                        className="bg-[#081142] text-[#fff] px-1"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                      <button className="border px-1">{item.quantity}</button>
                      <button
                        className="bg-[#081142] text-[#fff] border px-1"
                        onClick={() => removeFromCart(item)}
                      >
                        -
                      </button>
                    </div>

                    <h5 className="text-xs font-bold">{ProductTotal(item)}</h5>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div>
          {cartItems.length > 0 ? (
            <div className="mt-[250px] pt-[40px] mb-[200px]">
              <div className="flex justify-end gap-12 items-end">
                <div className="flex flex-col gap-6">
                  <h5 className="">Subtotal</h5>
                  <h5 className="">Delivery Fee</h5>
                  <h5 className="border-y-2 mr-[-110px] md:mr-[-130px] border-[#081142] ">
                    Total
                  </h5>
                </div>

                {/* <p className="border-[#081142] border-x"></p> */}

                <div className="flex flex-col gap-6">
                  <h5>{getCartTotal()}</h5>
                  <h5>10,000</h5>
                  <h5>{addDeliveryFee()}</h5>
                </div>
              </div>
              <Button
                isLogo="true"
                text="checkout"
                className="float-end my-5 rounded-[2px] w-[72px]"
              />
            </div>
          ) : (
            <EmptyCart />
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
