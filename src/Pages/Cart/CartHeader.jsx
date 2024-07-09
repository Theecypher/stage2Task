const CartHeader = () => {
  return (
    <div className="">
      {/* <h2 className="text-center text-[#081142] font-bold text-xl">Shopping Cart</h2> */}

      <div className="flex justify-between border-b border-[#000] py-3">
        <h5>Item</h5>

        <div className="flex justify-between gap-[50px] md:gap-[90px]">
          <h5>Price</h5>
          <h5>Qty</h5>
          <h5>Total</h5>
        </div>
      </div>
    </div>
  );
};

export default CartHeader;
