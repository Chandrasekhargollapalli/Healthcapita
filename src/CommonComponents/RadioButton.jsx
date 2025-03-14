import React from "react";

const RadioButton = ({ name, value, label, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-radio h-5 w-5"
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
};

export default RadioButton;
