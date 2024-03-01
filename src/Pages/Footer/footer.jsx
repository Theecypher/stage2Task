import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Content from "./FooterContent";
import logo from "../../assets/footer-logo.svg"

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="grid text-white gap-5">
        <div>
          <img src={logo} alt="nike logo" />
          <p>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>

        <div>
          {Content.map((element, index) => (
            <div key={index}>
              <h4>{element.name}</h4>
              <ul>
                <li>{element.links}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <p>Copyright. All rights reserved.</p>
        <p>Terms & conditions</p>
      </div>
    </div>
  );
};

export default Footer;
