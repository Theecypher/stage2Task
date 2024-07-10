import CheckoutForm from "./CheckoutForm.";

const Checkout = () => {
    return ( 
        <div className="my-8">
            <h3 className="text-center text-2xl my-7 text-[#081142] font-bold">Checkout</h3>

            <div>
                <div className="flex mt-3 mb-5 items-center justify-center gap-2">
                    <div className="bg-[#081142] h-5 w-5 rounded-full"></div>
                    <p>Shipping</p>
                    <p className="w-[100px] h-[2px] bg-[#081142]"></p>
                    <div className="bg-[#8a94cc] h-5 w-5 rounded-full"></div>
                    <p>Payment Details</p>
                    <p className="w-[100px] h-[2px] bg-[#081142]"></p>
                    <div className="bg-[#8a94cc] h-5 w-5 rounded-full"></div>
                    <p>Confirmation</p>
                </div>
            </div>

            <CheckoutForm />
        </div>
     );
}
 
export default Checkout;