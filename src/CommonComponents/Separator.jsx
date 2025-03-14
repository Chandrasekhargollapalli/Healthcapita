// Separator.js
import React from "react";

const Separator = ({ className = "", styleType = "dashed" }) => {
  // Define basic Tailwind classes for separator styles
  const baseClasses = "border-t m-[10px] w-full";

  // Determine the style type based on props
  const styles = {
    solid: "border-gray-300",
    dashed: "border-dashed  border-gray-300",
    dotted: "border-dotted border-gray-300",
  };

  // Combine the base and style-specific classes
  const separatorClasses = `${baseClasses} ${styles[styleType]} ${className}`;

  return <hr className={separatorClasses} />;
};

export default Separator;
