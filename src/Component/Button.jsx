const Button = ({ text, icon }) => {
  return (
    <button className="text-[#fff] text-lg bg-red-500 py-3 mt-[30px] mb-[20px] px-10 rounded-[30px] flex items-center justify-center gap-3">
      {text}
      {icon}
    </button>
  );
};

export default Button;
