import Button from "../../Component/Button";

const Subscribe = () => {
  return (
    <div className="mt-[100px]">
      <div className="flex justify-center flex-col items-center md:flex-row">
        <h2 className="text-4xl leading-[68px] font-bold w-[70%]">
          Sign up for <span className="text-[#ff4040]">Update</span> &
          Newsletter
        </h2>

        <input
          type="text"
          className=" border rounded-[40px] border-slate-700 px-14 py-[20px] mt-10"
          placeholder="subscribe@nike.com"
        />
        <Button text="sign up" />
      </div>
    </div>
  );
};

export default Subscribe;
