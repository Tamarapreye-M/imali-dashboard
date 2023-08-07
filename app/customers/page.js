"use client";

import React, { useState } from "react";
import CustomersCard from "./CustomersCard";
import Input from "../components/Input";
import Button from "../components/button";
import Table from "../components/Table";
import data from "../data/data";
import ProfileComp from "../components/ProfileComp";
import Link from "next/link";

const CustomersPage = () => {
	const [newDisplay, setNewDisplay] = useState(newData);
	const handleNewDisplay = (ev) => {
		let filtered = data.filter((each) =>
			each.name.toLowerCase().includes(ev.target.value)
		);
		let updated = filtered.map((each, i) => {
			return {
				id: each.id,
				customer: (
					<ProfileComp
						key={i}
						name={each.name}
						phoneNumber={each.phoneNumber}
						picture={each.avatar}
					/>
				),
				date: each.date,
				voucherNo: each.voucherNumber,
				kycStatus: each.kycStatus,
				view: <Link href={`/customers/${each.slug}`}>{each.viewLink}</Link>,
			};
		});
		setNewDisplay(updated);
	};
	return (
		<div className="container px-10 pt-10">
			{/* <CustomerProfile /> */}
			<h1 className="text-3xl my-6">Customers</h1>
			<div className="flex gap-x-4">
				{balanceData.map((item, i) => {
					return (
						<CustomersCard
							key={i}
							value={item.value}
							title={item.title}
							percentage={item.percentage}
						/>
					);
				})}
			</div>
			<div className="flex justify-between items-center my-10">
				<Input
					placeholder="Search for customer’s name"
					handleNewDisplay={handleNewDisplay}
				/>
				<Button textTitle="Export" />
			</div>
			<div>
				<Table headers={tableHeaders} data={newDisplay} />
			</div>
		</div>
	);
};

export default CustomersPage;

const balanceData = [
	{
		percentage: "40%",
		title: "Total customers",
		value: "2,420",
	},
	{
		percentage: "10%",
		title: "Total active customers",
		value: "1,210",
	},
	{
		percentage: "20%",
		title: "Total defaulters",
		value: "316",
	},
];

export const TRANSACTION_STATUS = {
	SUCCESFUL: "Successful",
	FAILED: "Failed",
};
//  <Link href={`/blog/${post.slug}`}>{post.title}</Link>;

const tableHeaders = [
	"ID",
	"CUSTOMERS",
	"DATE",
	"VOUCHER NO.",
	"KYC STATUS",
	"VIEW",
];

const newData = data.map((each, i) => {
	return {
		id: each.id,
		customer: (
			<ProfileComp
				key={i}
				name={each.name}
				phoneNumber={each.phoneNumber}
				picture={each.avatar}
			/>
		),
		date: each.date,
		voucherNo: each.voucherNumber,
		kycStatus: each.kycStatus,
		view: <Link href={`/customers/${each.slug}`}>{each.viewLink}</Link>,
	};
});
// const data = [
//   {
//     id: "#3066",
//     customer: (
//       <div className="flex items-center gap-2">
//         <Image className="w-8 h-8" alt="profile" src={OLIVIA} />
//         <div>
//           <p className="text-xs mb-1">Olivia Rhye</p>
//           <p className="text-gray-500 text-xs">+234 803 0000</p>
//         </div>
//       </div>
//     ),
//     data: "Jan 6, 2022",
//     voucherNo: "HKJKD",
//     transactionStatus: TRANSACTION_STATUS.SUCCESFUL,
//     view: "view",
//   },
//   {
//     id: "#3066",
//     customer: (
//       <div className="flex items-center gap-2">
//         <Image className="w-8 h-8" alt="profile" src={OLIVIA} />
//         <div>
//           <p className="text-xs mb-1">Olivia Rhye</p>
//           <p className="text-gray-500 text-xs">+234 803 0000</p>
//         </div>
//       </div>
//     ),
//     data: "Jan 6, 2022",
//     voucherNo: "HKJKD",
//     transactionStatus: TRANSACTION_STATUS.SUCCESFUL,
//     view: "view",
//   },
//   {
//     id: "#3066",
//     customer: (
//       <div className="flex items-center gap-2">
//         <Image className="w-8 h-8" alt="profile" src={OLIVIA} />
//         <div>
//           <p className="text-xs mb-1">Olivia Rhye</p>
//           <p className="text-gray-500 text-xs">+234 803 0000</p>
//         </div>
//       </div>
//     ),
//     data: "Jan 6, 2022",
//     voucherNo: "HKJKD",
//     transactionStatus: TRANSACTION_STATUS.SUCCESFUL,
//     view: "view",
//   },
//   {
//     id: "#3066",
//     customer: (
//       <div className="flex items-center gap-2">
//         <Image className="w-8 h-8" alt="profile" src={OLIVIA} />
//         <div>
//           <p className="text-xs mb-1">Olivia Rhye</p>
//           <p className="text-gray-500 text-xs">+234 803 0000</p>
//         </div>
//       </div>
//     ),
//     data: "Jan 6, 2022",
//     voucherNo: "HKJKD",
//     transactionStatus: TRANSACTION_STATUS.SUCCESFUL,
//     view: "view",
//   },
// ];
