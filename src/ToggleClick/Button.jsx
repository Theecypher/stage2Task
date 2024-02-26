import { useState } from "react";

const Button = () => {
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  let toggleClassCheck = btnState ? " active" : " 7";

  return (
    <button
      className={`border border-red-500 py-1 px-2 m-1 rounded-md ${toggleClassCheck}`}
      //   className="border border-red-500 py-1 px-2 m-1 rounded-md"
      onClick={handleClick}
    >
      Toggle class
    </button>
  );
};

export default Button;
