import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Content from "./FooterContent";
import logo from "../../assets/footer-logo.svg";

const Footer = () => {
  return (
    <div className="bg-black px-10 pt-[120px] pb-6 md:pt-[100px] md:pb-[50px] mt-10">
      <div className="flex justify-center md:justify-start items-start gap-14 flex-wrap max-lg:flex-col text-white">
        <div>
          <img
            src={logo}
            className="w-[150px] m-0"
            height={46}
            alt="nike logo"
          />
          <p className="max-w-sm text-base leading-7 mt-6 text-white opacity-50">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            <FaFacebook className="w-12 h-12" />
            <FaTwitter className="w-12 h-12" />
            <FaInstagram className="w-12 h-12" />
          </div>
        </div>

        {/* <div className="md:grid grid-cols-3 gap-20"> */}
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {Content.map((element, index) => (
            <div key={index} className="my-10 md:my-0">
              <h4 className="text-2xl mb-2 text-white leading-normal font-medium">
                {element.name}
              </h4>
              <div className="flex flex-col">
                <ul className="">
                  {element.links.map((links, index) => (
                    <li
                      className="mt-3 text-base leading-normal text-gray-200 p-[3px] hover:text-gray-800"
                      key={index}
                    >
                      {links.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:justify-between md:flex-row items-center mt-[120px] text-gray-400">
        <p className="leading-normal text-base">
          Copyright. All rights reserved.
        </p>
        <p className="cursor-pointer">Terms & conditions</p>
      </div>

    </div>
  );
};

export default Footer;
