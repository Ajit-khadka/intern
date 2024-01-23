const Logo = () => {
  return (
    <div className="relative">
      <div className="border border-black h-10 w-10 rounded-full flex justify-center items-center">
        <div className="circle h-4 w-4 bg-gradient-to-r from-[#BB78A4] via-[#bb8daab4] to-pink-100 rounded-[50%]"></div>
        <div className="moon h-2 w-2 rounded-full absolute bg-orange-500 bottom-[1px] right-1 bg-gradient-to-l from-[#BB78A4] via-[#bb8daab4] to-pink-100"></div>
      </div>
    </div>
  );
};

export default Logo;
