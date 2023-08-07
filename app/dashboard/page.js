"use client";
import Link from "next/link";

import React from "react";

import imaliPayLogo from "../assets/imaliPayLogo.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { MdOutlineSpaceDashboard, MdWallet } from "react-icons/md";
import { TbUserCircle } from "react-icons/tb";
import { GoTag } from "react-icons/go";

const DashboardPage = () => {
	return (
		<div className="dashboard p-8 bg-[#fff] w-[400px]">
			<div className="mb-6">
				<Link href={"/"}>
					<Image
						src={imaliPayLogo}
						width={170}
						height={50}
						alt="Picture of the author"
					/>
				</Link>
			</div>
			<h1 className="text-[#808080] my-8 text-xs">QUICK MENU</h1>
			<nav className="flex flex-col gap-8 border-l-[#F7F7F7] text-gray-500 font-medium">
				{links.map((link, i) => {
					return (
						<NavLink key={i} href={link.path} exact className="">
							{link.label}
						</NavLink>
					);
				})}
			</nav>
		</div>
	);
};

export default DashboardPage;
const links = [
	{
		label: (
			<div className="flex items-center gap-1 text-base ">
				<MdOutlineSpaceDashboard className=" rotate-90" /> <span>Overview</span>
			</div>
		),
		path: "/",
	},
	{
		label: (
			<div className="flex items-center gap-1 text-base ">
				<TbUserCircle /> <span>Customers</span>{" "}
			</div>
		),
		path: "/customers",
	},
	{
		label: (
			<div className="flex items-center gap-1 text-base ">
				<MdWallet />
				<span>Defaulters</span>
			</div>
		),
		path: "/defaulters",
	},
	{
		label: (
			<div className="flex items-center gap-1 text-base ">
				<GoTag />
				<span>Fulfillments</span>
			</div>
		),
		path: "/fulfillments",
	},
	{
		label: (
			<div className="flex items-center gap-1 text-base ">
				<span>Account Summary</span>
			</div>
		),
		path: "/account",
	},
];
