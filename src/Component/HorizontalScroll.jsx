import "./hor.css";
import { useEffect, useRef, useState } from "react";
import { ReactDOM } from "react";

const ClickandScroll = () => {
  const divRef = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const active = "bg-black grabbing cursor-grabbing scale";

  const tabsH = divRef.current;

  // const handleMouseMove = (e) => {
  //   setTimeout(() => {}, 100);
  // };

  const handleMouseDown = (e) => {
    setIsDown(true);
    setToggle((prev) => !prev);
    setStartX(e.pageX - tabsH.offsetLeft);
    setScrollLeft(tabsH.scrollLeft);
    // console.log({ startX, scrollLeft });
  };

  const handleMouseLeave = (e) => {
    setIsDown(false);
    setToggle(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - tabsH.offsetLeft;
    const walk = (x - startX) * 3;
    tabsH.scrollLeft = scrollLeft - walk;
  };

  // console.log(isDown);

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      // onClick={handleClick}
      ref={divRef}
      className="h-[800px] p-[100px] w-full border-white whitespace-nowrap overflow-y-hidden pers select-none relative bg-pink-50 text-[0px] will-change-transform cursor-pointer transition-all duration-[0.2s] scale-95"
      // className={
      // toggle
      // ? "h-[800px] p-[100px] w-full border-white whitespace-nowrap overflow-y-hidden overflow-x-scroll pers select-none relative bg-pink-50 text-[0px] will-change-transform cursor-pointer transition-all duration-[0.2s] scale-95"
      // : "h-[800px] p-[100px] w-full border-white whitespace-nowrap overflow-y-hidden overflow-x-scroll pers select-none relative bg-black text-[0px] will-change-transform cursor-pointer transition-all duration-[0.2s] scale-100"
      // }
      // className="h-[800px] p-[100px] w-full border-white whitespace-nowrap overflow-y-hidden overflow-x-scroll pers select-none relative bg-pink-50 text-[0px] will-change-transform cursor-pointer transition-all duration-[0.2s] scale-95"
    >
      <div className="w-[200px] item h-[calc(100%-40px)] inline-flex items-center justify-center text-[80px] font-[100] bg-blue-500 text-white shadow-xl"></div>
      <div className="w-[200px] item h-[calc(100%-40px)] inline-flex items-center justify-center text-[80px] font-[100] text-white shadow-xl bg-orange-700"></div>
      <div className="w-[200px] item h-[calc(100%-40px)] inline-flex items-center justify-center text-[80px] font-[100] text-white shadow-xl bg-purple-700"></div>
      <div className="w-[200px] item h-[calc(100%-40px)] inline-flex items-center justify-center text-[80px] font-[100] text-white shadow-xl bg-slate-700"></div>
      <div className="w-[200px] item h-[calc(100%-40px)] inline-flex items-center justify-center text-[80px] font-[100] text-white shadow-xl bg-gray-300"></div>
      <div className="w-[200px] item h-[calc(100%-40px)] inline-flex items-center justify-center text-[80px] font-[100] text-white shadow-xl bg-red-700"></div>
      <div className="w-[200px] item h-[calc(100%-40px)] inline-flex items-center justify-center text-[80px] font-[100] text-white shadow-xl bg-amber-600"></div>
      <div className="w-[200px] item h-[calc(100%-40px)] inline-flex items-center justify-center text-[80px] font-[100] text-white shadow-xl bg-pink-700"></div>
      <div className="w-[200px] item h-[calc(100%-40px)] inline-flex items-center justify-center text-[80px] font-[100] text-white shadow-xl border-indigo-700"></div>
      <div className="w-[200px] item h-[calc(100%-40px)] inline-flex items-center justify-center text-[80px] font-[100] bg-blue-500 text-white shadow-xl"></div>
      <div className="w-[200px] item h-[calc(100%-40px)] inline-flex items-center justify-center text-[80px] font-[100] text-white shadow-xl bg-orange-700"></div>
      <div className="w-[200px] item h-[calc(100%-40px)] inline-flex items-center justify-center text-[80px] font-[100] text-white shadow-xl bg-purple-700"></div>
      <div className="w-[200px] item h-[calc(100%-40px)] inline-flex items-center justify-center text-[80px] font-[100] text-white shadow-xl bg-slate-700"></div>
      <div className="w-[200px] item h-[calc(100%-40px)] inline-flex items-center justify-center text-[80px] font-[100] text-white shadow-xl bg-gray-300"></div>
      <div className="w-[200px] item h-[calc(100%-40px)] inline-flex items-center justify-center text-[80px] font-[100] text-white shadow-xl bg-red-700"></div>
      <div className="w-[200px] item h-[calc(100%-40px)] inline-flex items-center justify-center text-[80px] font-[100] text-white shadow-xl bg-amber-600"></div>
      <div className="w-[200px] item h-[calc(100%-40px)] inline-flex items-center justify-center text-[80px] font-[100] text-white shadow-xl bg-pink-700"></div>
      <div className="w-[200px] item h-[calc(100%-40px)] inline-flex items-center justify-center text-[80px] font-[100] text-white shadow-xl border-indigo-700"></div>
    </div>
  );
};

export default ClickandScroll;
