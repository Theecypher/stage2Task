import { Link } from "react-router-dom";
import vector from "../../assets/Vector3.png"
import "./check.css"
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useContext } from "react";
import { ModalContext } from "../../Context/ModalContext";

const Payment = ({ hasPaidFUnction }) => {
  const { closeModalFuncn } = useContext(ModalContext);

  const handleFunction = () => {
    closeModalFuncn();
    hasPaidFUnction()
  }


  return (
    <div>
      <Link to="/" onClick={() => handleFunction()} className="flex fixed top-[10%] text-white z-[100%] p-3 items-center">
        <AiOutlineArrowLeft />
        <h5>Back</h5>
      </Link>
    <div className="flex flex-col justify-center absolute top-[50%] -translate-y-2/4 left-2/4 -translate-x-2/4 gap-[20px] w-[269px] md:w-[766px] p-[1.3rem] md:py-6 bg-white">
      <div className="flex justify-center items-center gap-3 flex-col">
        <img className="wall" src={vector} alt="" />

        <h3 className="text-[15px]">Congratulations!</h3>

        <h5 className="text-[9px]">You have successfully completed your order</h5>
      </div>
    </div>
    </div>
  );
};

export default Payment;
