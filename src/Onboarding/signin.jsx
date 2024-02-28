import { AiFillCloseCircle, AiOutlineCloseCircle } from "react-icons/ai";
// import { AiFillCloseCircle } from "react-icons/gi";

const SignIn = () => {
  return (
    <div className="flex">
      <form className="bg-white w-full h-[200px] fixed inset-0 z-50 items-center justify-center">
        <div>
          <AiOutlineCloseCircle />
          {/* <AiFillCloseCircle className="bg-none text-black" /> */}
          <div>
            <input
              className="w-full outline-none border-b-[1.5px] h-full py-0 px-[30px] transition-all duration-200 ease border-[#aaa]"
              type="text"
              placeholder="Username"
            />
          </div>

          <div>
            <input
              className="w-full outline-none border-b-[1.5px] h-full py-0 px-[30px] transition-all duration-200 ease border-[#aaa]"
              type="password"
              placeholder="password"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
