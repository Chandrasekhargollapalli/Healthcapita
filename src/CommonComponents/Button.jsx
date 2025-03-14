import React from "react";

const Button = ({ type, disabled, onClick, children }) => {
  const basestyles =
    "rounded-full  flex items-center justify-center transition duration-300 ease-in-out ";

  const typestyles = {
    primary: `bg-[#1C9401] text-white 
                  hover:bg-[#26BD00] 
                  active:bg-[#1C9401] 
                  disabled:bg-[#F2FFEE] disabled:cursor-not-allowed`,

    primaryblue: `bg-[#001940] text-white 
                      hover:bg-[#0043B3]
                      active:bg-[#001940]   
                      disabled:bg-blue-300 disabled:cursor-not-allowed`,

    secondary: `border border-blue-900 text-blue-500 
                    hover:border-[#1945DC] hover:text-[#1945DC]
                    text-[#001940]
                    active:bg-[#E9F9FF] active:border-blue-900 active:text-blue-900
                    disabled:bg-[#F3F4F6] disabled:border-none disabled:text-[#9CA3AF] disabled:cursor-not-allowed`,

    tertiary: ` text-[#1C9401] 
                   hover:bg-gray-100 
                   active:bg-gray-200 
                   disabled:bg-gray-50 disabled:text-gray-300 disabled:cursor-not-allowed`,
  };

  const responsivestyles =
    "text-sm px-3 py-2 sm:text-sm sm:px-4 sm:py-2 md:text-sm md:px-6 md:py-3 lg:text-sm lg:px-6 lg:py-3";

  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${basestyles} ${typestyles[type]} ${responsivestyles}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
