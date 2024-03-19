import { useRef, useState } from "react";
import { FaClosedCaptioning } from "react-icons/fa";
import { Link } from "react-router-dom";
import BackDrop from "./BackDrop";
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";


const SignupModal = ({ handleClose, text }) => {
  return (
    <BackDrop onClick={handleClose}>
       <div className="h-min m-auto bg-white py-4 px-[2rem] rounded-xl flex flex-col items-center w-[380px] gap-4">
        <button className="w-6 self-end mb-7" onClick={handleClose}>
          <AiOutlineClose />
        </button>

        {/* <button className="border border-black" onClick={handleClose}>close</button> */}

        <form className="w-full flex flex-col gap-3">
          <div>
            <input type="text" className="w-full p-2 border" placeholder="Username" />
          </div>
          <div>
            <input type="text" className="w-full p-2 border" placeholder="Password" />
          </div>

          <button className="w-full bg-blue-600 p-2 text-white font-bold">Sign in</button>
        </form>

        <Link className="self-end my-3 text-blue-600">Sign up</Link>
      </div>
    </BackDrop>
  );
};

export default SignupModal;
