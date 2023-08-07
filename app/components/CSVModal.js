import React, { useRef } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { TbFileUpload } from "react-icons/tb";
import Link from "next/link";

const CSVModal = () => {
	const inputRef = useRef(null);

	const handleClick = () => {
		// 👇️ open file input box on click of another element
		inputRef.current.click();
	};
	const handleFileChange = (event) => {
		const fileObj = event.target.files && event.target.files[0];
		if (!fileObj) {
			return;
		}
		event.target.value = null;
	};
	return (
		<div className="flex justify-center items-center h-screen fixed inset-0 z-50 bg-gray-500 bg-opacity-75 transition-opacity">
			<div className="bg-white p-6 rounded-lg shadow-sm w-[432px]">
				<div>
					<Link href={"/account"} className="flex items-center mb-3 gap-1">
						<div className="bg-gray-300 rounded-full p-[2px]">
							<RiArrowLeftSLine />
						</div>
						<p className="text-xs">Go Back</p>
					</Link>
				</div>

				<div
					className="relative h-[138px] border-dashed border border-[#C5C5C5] w-full bg-[#C5C5C5] flex flex-col justify-center items-center mb-4"
					onClick={handleClick}
				>
					<TbFileUpload size={30} />
					<p>{" Click to upload pdf file"}</p>
				</div>
				<input
					className="hidden"
					ref={inputRef}
					type="file"
					onChange={handleFileChange}
				/>
				<div>
					<Link href={"/account"}>
						<button
							className="py-6 w-full bg-[#80B539] text-white rounded-lg"
							type="submit"
						>
							Submit
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CSVModal;
