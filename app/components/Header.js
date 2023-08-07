import Image from "next/image";
import React from "react";
import NOTIFICATIONS from "../assets/notifications_icon.png";
import ALEX from "../assets/alex-avatar.png";
import { GrNotification } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
	return (
		<div className="sticky inset-x-0  top-0 z-10 flex justify-between px-10 py-4 bg-white shadow-sm">
			<div>
				<h1 className="text-xl font-semibold">Hello, Alex</h1>
				<p className="text-xs text-gray-400">
					{"Here's what's going on with your account."}
				</p>
			</div>
			<div className="flex justify-center items-center gap-1">
				<div className="relative">
					<GrNotification size={24} />
					<span className="w-3 h-3 bg-red-600 absolute rounded-full text-white text-[8px] flex justify-center items-center top-0 -right-1">
						2
					</span>
				</div>
				<p className="w-2 bg-gray-700 mx-4"></p>
				<div className="flex items-center gap-1">
					<Image className="w-8 h-8" alt="profile" src={ALEX} />
					<div>
						<p className="text-xs font-semibold flex items-center gap-1">
							Alex
							<IoIosArrowDown />
						</p>
						<p className=" text-xs whitespace text-gray-400">
							Vendor ID: 389374
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
