import Link from "next/link";
import React from "react";

import imaliPayLogo from "../assets/imaliPayLogo.png";
import Image from "next/image";
import { MdOutlineSpaceDashboard, MdWallet } from "react-icons/md";
import { TbUserCircle } from "react-icons/tb";
import { GoTag } from "react-icons/go";

const DashboardPage = () => {
	return (
		
			<div className="dashboard p-8 bg-[#fff] w-[307px]">
				<div className="mb-6">
					<Image
						src={imaliPayLogo}
						width={161}
						height={43}
						alt="Picture of the author"
					/>
				</div>
				<h1 className="text-[#808080] my-8 text-xs">QUICK MENU</h1>
				<nav className="flex flex-col gap-8 border-l-[#F7F7F7]">
					<Link href={"/"} className="flex items-center gap-1 text-base">
						<MdOutlineSpaceDashboard className=" rotate-90" />{" "}
						<span>Overview</span>
					</Link>
					<Link
						href={"/customers"}
						className="flex items-center gap-1 text-base"
					>
						{" "}
						<TbUserCircle /> <span>Customers</span>{" "}
					</Link>
					<Link
						href={"/defaulters"}
						className="flex items-center gap-1 text-base"
					>
						<MdWallet />
						<span>Defaulters</span>
					</Link>
					<Link
						href={"/fulfillments"}
						className="flex items-center gap-1 text-base"
					>
						<GoTag />
						<span>Fulfillments</span>
					</Link>
					<Link href={"/account"} className="flex items-center gap-1 text-base">
						<span>Account Summary</span>
					</Link>
				</nav>
			</div>
		
	);
};

export default DashboardPage;
