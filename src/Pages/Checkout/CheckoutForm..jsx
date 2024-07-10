const CheckoutForm = () => {
  return (
    <div className=" text-white px-4 py-5 items-center justify-center">
      <form className="flex flex-col gap-[10px] px-4 py-7 bg-[#081142]">
        <div className="flex gap-3">
          <div className="">
            <label htmlFor="">Firstname</label>
            <input className="bg-white py-[10px] outline-none w-full md:w-[345px] border-none lg:w-[46vw]" type="text" />
          </div>
          <div>
            <label htmlFor="">Lastname</label>
            <input className="bg-white py-[10px] outline-none border-none w-full md:w-[345px] lg:w-[46vw]" type="text" />
          </div>
        </div>

        <div>
          <label htmlFor="">Address 1</label>
          <input className="bg-white border-none outline-none py-[10px] w-full" type="text" />
        </div>
        <div>
          <label htmlFor="">Address 2</label>
          <input className="bg-white border-none outline-none py-[10px] w-full" type="text" />
        </div>

        <div className="flex gap-3">
          <div className="">
            <label htmlFor="">City</label>
            <input className="bg-white py-[10px] outline-none w-full md:w-[345px] border-none lg:w-[46vw]" type="text" />
          </div>
          <div>
            <label htmlFor="">State</label>
            <input className="bg-white py-[10px] outline-none border-none w-full md:w-[345px] lg:w-[46vw]" type="text" />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="">
            <label htmlFor="">Email Address</label>
            <input className="bg-white py-[10px] outline-none w-full md:w-[345px] border-none lg:w-[46vw]" type="text" />
          </div>
          <div>
            <label htmlFor="">Phone Number</label>
            <input className="bg-white py-[10px] outline-none border-none w-full md:w-[345px] lg:w-[46vw]" type="text" />
          </div>
        </div>


        <button className="self-end bg-white text-[#081142] py-[4px] px-7 mt-5 font-semibold">Next</button>


       

        
      </form>
    </div>
  );
};

export default CheckoutForm;
