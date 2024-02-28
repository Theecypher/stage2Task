import cardData from "./cardData";
import { AiFillShopping, AiFillPayCircle } from "react-icons/ai";

const Cards = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-[70px]">
      {cardData.map((item, index) => (
        <article key={index} className="grid px-6 rounded-lg py-4 shadow-xl bg-white w-[250px]">
            {item.icon}
            <h3 className="my-3 text-xl font-bold" >{item.name}</h3>
            <p className="w-[90%] opacity-90 text-[15px] leading-[120%]">{item.desc}</p>
        </article>
      ))}
    </div>
  );
};

export default Cards;
