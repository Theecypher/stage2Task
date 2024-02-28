const Button = ({ text, icon }) => {
  return (
    <button className="text-[#fff] bg-red-500 py-3 my-[30px] px-10 rounded-[30px] flex items-center justify-center gap4">
      {text}
      {icon}
    </button>
  );
};

export default Button;
