import React from "react";

import { FiArrowDown, FiArrowUp } from "react-icons/fi";

function Card({ percentage, title, value }) {
  return (
    <div className="rounded-small shadow-md min-w-[100px] w-full p-8 bg-[#ffff]">
      <p className=" mb-2 font-semibold">{title}</p>
      <p className=" font-bold text-2xl my-2 mt-4">{value}</p>
      <p className="flex gap-2">
        <span
          className={`flex items-center text-xs gap-1 ${
            percentage.includes("10") ? "text-red-600" : "text-green-500"
          }`}
        >
          {percentage.includes("10") ? (
            <FiArrowDown />
          ) : (
            <FiArrowUp className="" />
          )}
          {percentage}
        </span>
        <span className="text-gray-400 text-xs">vs last month</span>
      </p>
    </div>
  );
}

export default Card;
