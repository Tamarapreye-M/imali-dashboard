import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Input({ placeholder }) {
	return (
		<div className="bg-[#ffff] border border-gray-100 rounded-lg py-2 px-3 text-gray-700 flex ">
			<AiOutlineSearch size={24} />
			<input
				className="ml-2 appearance-none  w-full bg-none leading-tight focus:outline-none focus:shadow-outline"
				placeholder={placeholder ?? ""}
			/>
		</div>
	);
}

export default Input;
