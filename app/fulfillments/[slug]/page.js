"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiDollar } from "react-icons/ci";
import data from "@/app/data/data";
import Image from "next/image";

const FulfillmentsProfilePage = ({ param }) => {
	const [customerData, setCustomerData] = useState({});
	const params = useParams();
	const id = params.slug;

	
	useEffect(() => {
		const dataToDisplay = data.find((each) => each.slug == +id);

		setCustomerData(dataToDisplay);
		// firstName = customerData.name.split(" ")[0];
		// lastName = customerData.name.split(" ")[1];
		// return () => {
		// 	second;
		// };
	}, [params]);
	customerData;

	let { phoneNumber, vehicleModel, name, avatar } = customerData;
	return (
		<div className="pt-10 px-8">
			<div className="flex">
				<a className="cursor-pointer text-sm">Go back / </a>{" "}
				<p className="text-gray-400 ml-1 text-sm">
					{customerData.id ? customerData.name : "Oliver Tia"}
				</p>
			</div>
			<div className="py-10 px-12 bg-white mt-6 shadow-sm flex">
				<div className="flex-1">
					<h3 className="text-2xl font-normal">{"Customer's Profile"}</h3>
					<div className="flex gap-2 mt-10 my-3">
						{avatar ? (
							<Image className="w-10 h-10" alt="profile" src={avatar} />
						) : (
							<div className="w-12 h-12 bg-[#f9f5ff] text-[#7f56d9] p-5 rounded-full flex justify-center items-center font-normal">
								OR
							</div>
						)}

						<div>
							<p className="text-sm">
								{customerData.id ? customerData.name : "Oliver Tia"}
							</p>
							<p className="text-gray-400 text-xs">Customer</p>
						</div>
					</div>
					<div className="flex gap-4 my-1">
						<TextInput
							label={"First Name"}
							value={name ? name.split(" ")[0] : "Oliver"}
						/>
						<TextInput
							label={"Last Name"}
							value={name ? name.split(" ")[1] : "Tai"}
						/>
					</div>
					<div className="flex gap-4 my-1">
						<TextInput label={"Gender"} value={"Male"} />
						<TextInput label={"Date of birth"} value={"21 July 1990"} />
					</div>
					<div className="flex gap-4 my-1">
						<TextInput label={"BVN"} value={"230459694042"} />
						<TextInput label={"Phone Number"} value={phoneNumber} />
					</div>

					<TextInput
						label={"Home address"}
						value={"34, Sunville Estate, Macanthony Street, Ikeja"}
					/>
					<TextInput
						label={"Location of Purchase"}
						value={"Mega Autoshop, Lagos "}
					/>
					<TextInput label={"Vehicle Model"} value={vehicleModel} />
					<TextInput
						label={"Insurance Provider"}
						value={"Company Insurance Plc"}
					/>
				</div>
				<div className="w-[1px] bg-gray-300 mx-6"></div>
				<div className="flex-1 px-5 pt-16 ">
					<p className="text-xs text-gray-500 ">Transaction History</p>
					<div className="rounded-lg p-5 mt-3 grid grid-cols-2 divide-x border border-gray-200">
						<div>
							<p className="text-xs text-gray-400 mb-1">Repayment Accoumt</p>
							<p className="text-lg font-semibold flex items-center">
								304,600 <span className="text-sm">/per month</span>
							</p>
						</div>

						<div className="pl-8">
							<p className="text-xs text-gray-400 mb-1">Value of car</p>
							<p className="text-lg font-semibold">6,300,950</p>
						</div>
					</div>
					<div className="rounded-lg p-5 mt-3 grid grid-cols-2 divide-x border border-gray-200">
						<div>
							<p className="text-xs text-gray-400 mb-1">Repayment Duration</p>
							<p className="text-md font-semibold flex items-center">
								6 months
							</p>
						</div>

						<div className="pl-8">
							<p className="text-xs text-gray-400 mb-1">Repayment Ends</p>
							<p className="text-md font-semibold">03 Dec 2022</p>
						</div>
					</div>
					<div className="rounded-lg p-5 mt-3 grid grid-cols-2 divide-x  border border-gray-200">
						<div className="">
							<p className="text-xs text-gray-400 mb-1">Transaction Date</p>
							<p className="text-md font-semibold flex items-center">
								Jan 6, 2022 @ 08:45
							</p>
						</div>

						<div className="flex flex-col items-start justify-center pl-8">
							<p className="text-xs text-gray-400 mb-1">Staus</p>
							<p className="bg-[#ECFDF3] text-[#027A48] rounded-2xl text-[10px] px-2 flex items-center justify-center ">
								Active
							</p>
						</div>
					</div>
					<div>
						<p className="text-sm text-gray-400 mt-5 mb-3">Upcoming Payments</p>
						{upcomingPaymentData.map((num, i) => (
							<div key={i} className="flex justify-between items-center my-3">
								<div className="flex items-center justify-center gap-2">
									<div className="border border-gray-900 rounded-full p-2">
										<CiDollar size={16} />
									</div>
									<div>
										<p className="text-xs">{num}/4 Payment</p>
										<p className="text-[9px] text-gray-400">21 Jul, 2022</p>
									</div>
									{i == 1 ? (
										<p className="bg-[#FFFAEB] text-[#D68F00] rounded-2xl text-[10px] px-2 flex items-center justify-center ">
											Pending
										</p>
									) : (
										<p className="bg-red-50 text-red-500 rounded-2xl text-[10px] px-2 flex items-center justify-center ">
											Overdue
										</p>
									)}
								</div>
								<p className="text-sm font-semibold">NGN 34,600</p>
							</div>
						))}
						<p className="text-sm text-gray-400 mt-5 mb-3">
							Completed Payments
						</p>
						{completedPaymentData.map((num, i) => (
							<div key={i} className="flex justify-between items-center my-3">
								<div className="flex items-center justify-center gap-2">
									<div className="border border-gray-900 rounded-full p-2">
										<CiDollar size={16} />
									</div>
									<div>
										<p className="text-xs">{num}/4 Payment</p>
										<p className="text-[9px] text-gray-400">21 Jul, 2022</p>
									</div>
									<p className="bg-[#EFF8FF] text-[#175CD3] rounded-2xl text-[10px] px-2 flex items-center justify-center ">
										Paid
									</p>
								</div>
								<p className="text-sm font-semibold">NGN 34,600</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FulfillmentsProfilePage;

const TextInput = ({ label, placeholder, value }) => {
	return (
		<div className="mb-3">
			<label className="text-sm text-gray-400">{label}</label>
			<input
				className="appearance-none w-full bg-[#fafafa] leading-tight focus:outline-none focus:shadow-outline h-8 rounded-lg p-2 py-6 text-md"
				placeholder={placeholder ?? ""}
				value={value}
				readOnly
			/>
		</div>
	);
};

const upcomingPaymentData = [3, 4];
const completedPaymentData = [1, 2];
