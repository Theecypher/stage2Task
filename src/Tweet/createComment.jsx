import {
  AiOutlineArrowLeft,
  AiOutlineGif,
  AiTwotoneCalendar,
} from "react-icons/ai";
import { FaRegImage } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";
import {
  GrFormLocation,
  GrLocation,
  GrLocationPin,
  GrMapLocation,
} from "react-icons/gr";
import dp from "../assets/customer2.svg";

const CreateComment = () => {
  return (
    <div className="bg-black text-white w-full h-full">
      <header className="px-3 py-5 items-center flex justify-between">
        <AiOutlineArrowLeft className="text-xl font-bold text-white" />

        <div className="flex gap-5 text-blue-700  items-center">
          <h2 className="font-bold text-sm">Drafts</h2>
          <button
            disabled={true}
            className="bg-blue-700 py-2 px-5 rounded-md text-white font-bold"
          >
            Reply
          </button>
        </div>
      </header>

      <div className="px-[15px]">
        <div className="flex gap-3">
          <img src={dp} className="w-[45px]" alt="" />

          <div>
            <div className="flex items-center justify-center gap-1">
              <h4 className="name text-white font-bold text-base">
                Amaka Okafor
              </h4>
              <h6 className="userrname opacity-70 text-sm text-[#e1e1e1]">
                @makaybee
              </h6>
              <h6 className="timeposted text-sm opacity-70 text-[#e1e1e1]">
                . 2h
              </h6>
            </div>
            <h4 className="postlink self-start text-sm font-light">
              Amen pic.twittwer.com/p2p61fdclm
            </h4>
          </div>
        </div>

        <div className="relative">
          <div className="border-l-[3px] ml-5 my-[8px] border-[#3e3d3d] h-[180px]">
            <div className="postsdetail ml-4 absolute top-1/2 translate-y-[-50%]">
              <p>
                As God has sent one of his precious sons to make me his woman
              </p>
              <p>#DAYO'2024</p>
              <p>#weddingsbells</p>
              <p>#IWD</p>
              <p className="text-sm mt-5 text-[#e1e1e1]">
                <span className="opacity-50">Replying to</span>
                <span className="username text-blue-600 opacity-100">
                  @makaybee
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <img src={dp} className="w-[40px]" alt="" />

          <textarea
            name=""
            id=""
            cols="20"
            rows="8"
            className="bg-black outline-none border-none w-full"
            placeholder="Post your reply"
          ></textarea>
        </div>

        <div className="icons flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaRegImage className="text-blue-600 w-5" />
            <AiOutlineGif className="border-[1.5px] w-[16px] h-[12px] text-blue-600 border-blue-600" />
            <AiTwotoneCalendar className="text-blue-600 w-5" />
            <GrLocation className="text-blue-600 w-5" />
          </div>

          <div className="border w-5 h-5 rounded-full border-blue-600">
            {/* <input type="" className="border w-5 rounded-full bg-blue-600" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateComment;
