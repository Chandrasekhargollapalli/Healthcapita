import React from "react";
import "./Button.scss";

const Button = ({ type = "", disabled = false, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn-element rounded-full font-semibold flex items-center justify-center transition duration-300 ease-in-out ${
        type ? `${type} ` : ""
      }text-sm px-3 py-2 
        sm:text-base sm:px-4 sm:py-2 
        md:text-lg md:px-6 md:py-3 
        lg:text-xl lg:px-8 lg:py-4`}
    >
      {children}
    </button>
  );
};

export default Button;
