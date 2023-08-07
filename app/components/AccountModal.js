import React from "react";
import Link from "next/link";

import { RiArrowLeftSLine } from "react-icons/ri";

const AccountModal = ({ type, title }) => {
	return (
		<div className="flex justify-center items-center h-screen fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
			<div className="bg-white p-6 rounded-lg shadow-sm w-[300px]">
				<div>
					<Link href={"/account"} className="flex items-center mb-3 gap-1">
						<div className="bg-gray-300 rounded-full p-[2px]">
							<RiArrowLeftSLine />
						</div>
						<p className="text-xs">Go Back</p>
					</Link>
				</div>

				<h1 className="font-semibold">{title} Account</h1>
				<p className="text-xs text-gray-400 ">choose an option to proceed</p>
				<div className="flex flex-col justify-between items-center my-2 bg-gray-300 py-2 rounded-md mt-4">
					<p className="text-xs font-semibold">Connect {type} account</p>
				</div>
				<div className="flex flex-col justify-between items-center py-2 rounded-md border border-gray-900 mb-6">
					<p className="text-xs font-semibold">Upload {type} account</p>
				</div>
			</div>
		</div>
	);
};

export default AccountModal;
