import React from "react";
import data from "../data/data";
import OVERVIEWWALLET from "../assets/overviewWallet.svg";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import Table from "../components/Table";
// import { headers } from "next/dist/client/components/headers";
import Image from "next/image";

import DOLLARLIGHT from "../assets/dollar-icon-light.svg";
import TRANSACTION from "../assets/transaction-icon.svg";
import ProfileComp from "../components/ProfileComp";

const OverviewPage = () => {
	return (
		<div className="container px-10 py-8">
			<h1 className="text-3xl my-6">Overview</h1>
			<div className="flex gap-x-4">
				{balanceData.map((item, i) => {
					return (
						<Card
							key={i}
							value={item.value}
							title={item.title}
							image={item.image}
						/>
					);
				})}
				{/* <Card image={<></>} title="Total outstanding balance" value={"$6000"} /> */}
			</div>
			<div className="flex justify-between items-center my-10">
				<Input placeholder="Search for customer’s name" />
				<Button textTitle="Export" />
			</div>
			<div>
				<Table headers={tableHeaders} data={newData} />
			</div>
		</div>
	);
};

export default OverviewPage;

const balanceData = [
	{
		image: OVERVIEWWALLET,
		title: "Total outstanding balance",
		value: "$6000",
	},
	{
		image: DOLLARLIGHT,
		title: "Total repayment pending ",
		value: "72,864",
	},
	{
		image: TRANSACTION,
		title: "Total trasaction counts",
		value: "3062",
	},
];

export const TRANSACTION_STATUS = {
	SUCCESFUL: "Successful",
	FAILED: "Failed",
};

const tableHeaders = [
	"CUSTOMERS",
	"DEPOSITS",
	"DATE",
	"VOUCHER NO.",
	"TRANS. STATUS",
];

const newData = data.map((each, i) => {
	return {
		customers: (
			<ProfileComp
				key={i}
				name={each.name}
				phoneNumber={each.phoneNumber}
				picture={each.avatar}
			/>
		),
		deposit: each.depositSum,
		date: each.dateAndTime,
		voucherNo: each.voucherNumber,
		transactionStatus: each.transStatus,
	};
});

// const data = [
// 	{
// 		customer: (
// 			<div className="flex items-center gap-2">
// 				<Image className="w-8 h-8" alt="profile" src={OLIVIA} />
// 				<div>
// 					<p className="text-xs mb-1">Olivia Rhye</p>
// 					<p className="text-gray-500 text-xs">+234 803 0000</p>
// 				</div>
// 			</div>
// 		),
// 		deposit: "NGN 34,600",
// 		data: "Jan 6, 2022 • 09:21",
// 		voucherNo: "HKJKD",
// 		transactionStatus: TRANSACTION_STATUS.SUCCESFUL,
// 	},
// 	{
// 		customer: (
// 			<div className="flex items-center gap-2">
// 				<Image className="w-8 h-8" alt="profile" src={OLIVIA} />
// 				<div>
// 					<p className="text-xs mb-1">Olivia Rhye</p>
// 					<p className="text-gray-500 text-xs">+234 803 0000</p>
// 				</div>
// 			</div>
// 		),
// 		deposit: "NGN 34,600",
// 		data: "Jan 6, 2022 • 09:21",
// 		voucherNo: "HKJKD",
// 		transactionStatus: TRANSACTION_STATUS.FAILED,
// 	},
// 	{
// 		customer: (
// 			<div className="flex items-center gap-2">
// 				<Image className="w-8 h-8" alt="profile" src={OLIVIA} />
// 				<div>
// 					<p className="text-xs mb-1">Olivia Rhye</p>
// 					<p className="text-gray-500 text-xs">+234 803 0000</p>
// 				</div>
// 			</div>
// 		),
// 		deposit: "NGN 34,600",
// 		data: "Jan 6, 2022 • 09:21",
// 		voucherNo: "HKJKD",
// 		transactionStatus: TRANSACTION_STATUS.SUCCESFUL,
// 	},
// 	{
// 		customer: (
// 			<div className="flex items-center gap-2">
// 				<Image className="w-8 h-8" alt="profile" src={OLIVIA} />
// 				<div>
// 					<p className="text-xs mb-1">Olivia Rhye</p>
// 					<p className="text-gray-500 text-xs">+234 803 0000</p>
// 				</div>
// 			</div>
// 		),
// 		deposit: "NGN 34,600",
// 		data: "Jan 6, 2022 • 09:21",
// 		voucherNo: "HKJKD",
// 		transactionStatus: TRANSACTION_STATUS.SUCCESFUL,
// 	},
// ];
