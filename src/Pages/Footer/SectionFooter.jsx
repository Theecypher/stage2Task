import { Link } from "react-router-dom";
import { FooterData } from "./FooterData";


const SectionFooter = () => {
  return (
    <div className="bg-[#010411] px-4 pt-7 mt-14 text-[#fff]">
      <Link className="italic text-xl">TechDepot</Link>

      <div className="flex justify-between border-t-2 mt-4">
        {FooterData.map((item, index) => (
          <div className="" key={index}>
            <h1 className="font-semibold text-sm mt-3 mb-1 md:text-3xl">
              {item.title}
            </h1>
            {item.links.map((item, index) => (
              <div key={index}>
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
                  <div key={index}>
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

export default SectionFooter;
