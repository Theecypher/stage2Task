import Button from "../../Component/Button";

const Subscribe = () => {
  return (
    <div className="mt-[100px] md:py-[80px] md:px-2">
      <div className="flex border flex-col lg:py-10 mx-10 lg:flex-row lg:justify-between">
        <h2 className="text-5xl leading-[68px] font-bold w-[70%] md:w-full lg:w-[400px] lg:text-[42px] lg:leading-[44px]">
          Sign up for <span className="text-[#ff4040]">Updates</span> &
          Newsletter
        </h2>

        <div className="md:hidden">
          <input
            type="text"
            className=" border rounded-[40px] outline-none w-full border-slate-700 px-4 py-[20px] mt-10"
            placeholder="subscribe@nike.com"
          />
          {/* <Button redButton="true" text="sign up" /> */}
          <button className="bg-[#ff4040] w-full block text-[#fff] text-lg my-3 py-3 px-10 rounded-[30px] items-center justify-center gap-3">Sign up</button>
        </div>

        <div className="md:flex hidden py-2 w-[400px] pr-2 pl-5 rounded-full border-slate-700 border items-center justify-between">
          <input
            type="text"
            className="outline-none"
            placeholder="subscribe@nike.com"
          />

          <Button redButton="true" text="sign up" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
