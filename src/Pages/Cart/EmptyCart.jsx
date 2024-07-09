// import img from "../../assets/Ellipse 11.png"
import cart from "../../assets/Vector.png";
import Button from "../../Component/Button";
import "./emptycart.css";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-8 mb-[200px]">
      <div className="wall">
        <img
          className="w-[41.15px] h-[40px] relative top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]"
          src={cart}
          alt=""
        />
      </div>

      <div className="">
        <p className="mb-3 text-xl font-bold text-[#081142]">Your Cart is empty</p>
        <Button isLogo text="Continue shopping" to="/" className="w-[135px] mx-auto rounded-none" />
      </div>
    </div>
  );
};

export default EmptyCart;
