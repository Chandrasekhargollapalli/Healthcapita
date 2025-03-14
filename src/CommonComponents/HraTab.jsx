import React from "react";

const Tab = ({ icon, label, isActive, isDisabled, onClick, styles }) => {
  const { borderColor, textColor, bgColor } = styles;

  return (
    <span
      className={`flex items-center px-4 py-2 rounded-full ${
        isDisabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${isActive ? "border" : "border-none"}`}
      style={{
        borderColor: isActive
          ? borderColor
          : isDisabled
          ? "#D1D5DB"
          : "transparent",
        backgroundColor: isActive ? bgColor : "transparent",
      }}
      onClick={!isDisabled ? onClick : undefined}
    >
      <img src={icon} alt={label} className="mr-2" />
      <p style={{ color: isActive ? textColor : "#6B7280" }}>{label}</p>
    </span>
  );
};

export default Tab;
