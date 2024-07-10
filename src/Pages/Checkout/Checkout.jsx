import CheckoutForm from "./CheckoutForm.";
import round from "../../assets/round.svg"
import round1 from "../../assets/round2.png"

const Checkout = () => {
    return ( 
        <div className="my-8">
            <h3 className="text-center text-[18px] my-7 text-[#000] md:text-3xl lg:text-5xl font-bold">Checkout</h3>

                <div className="flex mt-3 mb-5 items-center justify-center gap-[1px]">
                    <img src={round} alt="" />
                    <p className="text-[8px] md:text-[18px] lg:text-[30px]">Shipping</p>
                    <p className="w-[62px] md:w-[100px ] lg:w-[200px]  h-[1px] bg-[#081142]"></p>
                    <img src={round1} alt="" />
                    <p className="text-[8px] md:text-[18px] lg:text-[30px]">Payment Details</p>
                    <p className="w-[62px] md:w-[100px] lg:w-[200px] h-[1px] bg-[#081142]"></p>
                    <img src={round1} alt="" />
                    <p className="text-[8px] md:text-[18px] lg:text-[30px]">Confirmation</p>
                </div>

            <CheckoutForm />
        </div>
     );
}
 
export default Checkout;