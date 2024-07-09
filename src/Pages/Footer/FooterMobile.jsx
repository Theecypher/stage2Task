import { NavLink } from "react-router-dom";
import { footerMobileData } from "./FooterData";

const FooterMobile = () => {
  return (
    <div className="bg-[#080142] px-4 py-4 fixed w-full bottom-0 text-[#fff] md:hidden">
      <div className="flex justify-center gap-10">
        {footerMobileData.map((item, index) => (
          <div key={index}>
            <NavLink to={item.to}>
              <img src={item.icon} alt="" />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterMobile;
