import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import { useDataContext } from "../providers";

function Input({ placeholder, handleNewDisplay }) {
	// const { display, setDisplay, handleDisplay } = useDataContext();

	return (
		<div className="bg-[#ffff] border border-gray-100 rounded-lg py-2 px-3 text-gray-700 flex ">
			<AiOutlineSearch size={24} />
			<input
				className="ml-2 appearance-none  w-full bg-none leading-tight focus:outline-none focus:shadow-outline"
				onChange={handleNewDisplay}
				placeholder={placeholder ?? ""}
			/>
		</div>
	);
}

export default Input;
