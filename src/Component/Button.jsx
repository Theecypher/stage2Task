const Button = ({ text, icon, redButton }) => {
  return (
    <div>
      {/* <button className="text-[#fff] text-lg bg-red-500 py-3 mt-[30px] mb-[20px] px-10 rounded-[30px] flex items-center justify-center gap-3"> */}
      <button className={redButton ? "text-[#fff] text-lg bg-[#ff4040] py-3 px-10 rounded-[30px] flex items-center justify-center gap-3"
      : "border border-gray-600 ext-lg py-3 flex justify-center items-center px-9 rounded-[30px]" 
      }>
        {text}
        {icon}
      </button>
    </div>
  );
};

export default Button;
