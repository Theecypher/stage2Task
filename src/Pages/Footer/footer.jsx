import { Link } from "react-router-dom";
import Logo from "../../component/logo";
import { FooterData } from "./FooterData";

const Footer = () => {
  return (
    <div className="bg-[#010411] px-4 py-4 text-[#fff] hidden md:block">
      <Logo />

      {/* <p className="border-b w-[95%] mx-auto"></p> */}

      <div className="flex justify-between border-t-2 my-4">
        {FooterData.map((item, index) => (
          <div className="" key={index}>
            <h1 className="font-semibold text-sm mt-3 mb-1 md:text-3xl">
              {item.title}
            </h1>
            {item.links.map((item, index) => (
              <div>
                <Link
                  className="text-xs md:text-xl flex flex-col gap-3"
                  key={index}
                >
                  {item}
                </Link>
              </div>
            ))}
            <div className="flex gap-2">
              {item.socials &&
                item.socials.map((item, index) => (
                  <div>
                    <img
                      className="md:w-[22.22px]"
                      key={index}
                      src={item}
                      alt=""
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
