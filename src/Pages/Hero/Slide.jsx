import shoe1 from "../../assets/big-shoe1.png";
import shoe2 from "../../assets/big-shoe2.png";
import shoe3 from "../../assets/big-shoe3.png";
import "./slide.css"
import { useState } from "react";

const Slide = () => {
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      { id: 1, img: shoe1 },
      { id: 2, img: shoe2 },
      { id: 3, img: shoe3 },
    ],
  });
  const [currentImage, setCurrentImage] = useState(shoe1);

  const toggleActive = (index) => {
    changeState({ ...appState, activeObject: appState.objects[index] });

    const img = appState.objects[index].img;

    setCurrentImage(img);
  };

  // console.log(currentImage);

  const toggleActiveStyles = (index) => {
    if (appState.objects[index] === appState.activeObject) {
      return "w-[90px] md:w-[140px] bg-gray-100 my-2  mx-[15px] p-3 rounded-xl border-[2px] border-red-600";
    } else {
      return "w-[90px] md:w-[140px] bg-gray-100 my-2  mx-[15px] p-3 rounded-xl";
    }
  };

  return (
    <div className="relative">
      <div className="bg-blue-100 p-9 md:p-[120px] slide">
        <img className="w-[600px] mx-auto" src={currentImage} alt="" />
      </div>

      <div className="flex md:left-[50%] md:translate-x-[-50%] absolute bottom-[-60px]">
        {appState.objects.map((elements, index) => (
          <img
            key={index}
            className={toggleActiveStyles(index)}
            src={elements.img}
            onClick={() => {
              toggleActive(index);
            }}
            alt=""
          />
        ))}
      </div>

      {/* {appState.objects.map((item, index) => (
        <div className="flex absolute bottom-[-90px]">
          <img src={shoe1} />
          <img
            className="w-[145px] bg-gray-100 m-2 p-3 rounded-xl"
            src={item.img}
            alt=""
          />
          <h1>Hello</h1>
        </div>
      ))} */}
    </div>
  );
};

export default Slide;
