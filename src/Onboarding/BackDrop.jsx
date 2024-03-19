const BackDrop = ({ children, onClick }) => {
  return (
    <div
      className="fixed top-0 left-0 h-full w-full bg-[#dfdedee1] flex items-center justify-center"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BackDrop;
