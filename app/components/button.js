import React from "react";

const Button = ({ icon, iconRight, textTitle, background, textColor }) => {
  return textTitle.toLowerCase() === "export" ? (
    <button className="hover:bg-gray-200 text-black py-2 px-4 rounded border border-gray-400 cursor-pointer">
      {textTitle}
    </button>
  ) : (
    <button
      className={`flex items-center gap-1 font-semibold py-2 px-4 text-xs rounded cursor-pointer ${textColor} ${background}`}
    >
      {icon} {textTitle} {iconRight}
    </button>
  );
};

export default Button;
