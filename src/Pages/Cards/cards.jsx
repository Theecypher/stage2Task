import cardData from "./cardData";
import { AiFillShopping, AiFillPayCircle } from "react-icons/ai";

const Cards = () => {
  return (
    <div className="flex flex-col gap-[36px] justify-center items-center mt-[100px]">
      {cardData.map((item, index) => (
        <article key={index} className="grid px-5 rounded-xl py-10 shadow-2xl bg-white w-[306px]">
            {item.icon}
            <h3 className="my-3 text-2xl font-bold" >{item.name}</h3>
            <p className="opacity-90 pb-3 text-[20px] font-extralight leading-[140%]">{item.desc}</p>
        </article>
      ))}
    </div>
  );
};

export default Cards;
