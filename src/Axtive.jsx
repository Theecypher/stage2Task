import { useState } from "react";
import "./Active.css";

const Active = () => {
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 4 }],
  });

  const toggleActive = (index) => {
    changeState({ ...appState, activeObject: appState.objects[index] });
  };

  const toggleActiveStyles = (index) => {
    // if (appState.objects[index]) {}
    if (appState.objects[index] === appState.activeObject) {
      return "box active";
    } else {
      return "box inactive";
    }
  };

  return (
    <div className="flex h-[100vh] justify-center items-center flex-nowrap">
      {appState.objects.map((elements, index) => (
        <div
          className={toggleActiveStyles(index)}
          key={index}
          onClick={() => {
            toggleActive(index);
          }}
        ></div>
      ))}
    </div>
  );
};

export default Active;
