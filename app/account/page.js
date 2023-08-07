"use client";
import React, { useState } from "react";
import AccountCard from "./AccountCard";
import Image from "next/image";
import Input from "../components/Input";
import Button from "../components/Button";
import Table from "../components/Table";
import DOLLAR from "../assets/dollar-black.png";
import ACCOUNTICON from "../assets/order-trans-icon.png";
import MPESA from "../assets/m-pesa-avatar.png";
import GTB from "../assets/gtb-avatar.png";
import CSVModal from '../components/CSVModal'
import PercentageCard from "./PercentageCard";
import {
	MdLink,
	MdOutlineFilterAlt,
	MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { PiFileTextDuotone, PiUserCircleLight } from "react-icons/pi";

// import AccountModal from "../components/AccountModal";
// import ConnectAcoountModal from "../components/ConnectAcoountModal";

const AccountPage = () => {
	// const [accountModalOpen, setAccountModalOpen] = useState(false);
	// const [ConnectAccountModalOpen, setConnectAccountModalOpen] = useState(false);
	// const [erpModalOpen, setErpModalOpen] = useState(false);
	// const [csvModalOpen, setcsvModalOpen] = useState(false);

	// const handleModal = (set, state) => set(!state);
	return (
		<div className="container px-10 pt-10">
			{/* <CSVModal /> */}
			<h1 className="text-3xl my-6">Account Summary</h1>
			<div className="flex justify-between mb-4">
				<div>
					<Button
						textTitle={"Filter"}
						background={"bg-gray-200"}
						icon={<MdOutlineFilterAlt size={18} />}
						iconRight={<MdOutlineKeyboardArrowDown size={18} />}
					/>
				</div>
				<div className="flex gap-2">
					<Button
						textTitle={"Connect ERP"}
						textColor={"text-black"}
						background={"bg-yellow-500"}
						icon={<MdLink size={18} />}
						// onClick={handleModal}
					/>
					<Button
						textTitle={"Upload CSV"}
						textColor={"text-white"}
						background={"bg-green-500"}
						icon={<PiFileTextDuotone size={18} />}
					/>
					<Button
						textTitle={"Connect Account"}
						textColor={"text-white"}
						background={"bg-black"}
						icon={<PiUserCircleLight size={18} />}
					/>
				</div>
			</div>
			<div className="flex gap-x-4">
				{balanceData.map((item, i) => {
					return (
						<AccountCard
							key={i}
							value={item.value}
							title={item.title}
							image={item.image}
						/>
					);
				})}
				<PercentageCard />
				{/* <Card image={<></>} title="Total outstanding balance" value={"$6000"} /> */}
			</div>
			<div className="flex justify-between items-center my-10">
				<Input placeholder="Search for customer’s name" />
				<Button textTitle="Export" />
			</div>
			<div>
				<Table headers={tableHeaders} data={data} />
			</div>
		</div>
	);
};

export default AccountPage;

const balanceData = [
	{
		image: ACCOUNTICON,
		title: "Total outstanding balance",
		value: "$6000",
	},
	{
		image: DOLLAR,
		title: "Total repayment pending ",
		value: "72,864",
	},
];

export const TRANSACTION_STATUS = {
	SUCCESFUL: "Successful",
	FAILED: "Failed",
};

const tableHeaders = [
	"DATE ",
	"ACCOUNT",
	"INVOICE TOTAL",
	"AMOUNT RECEIVED",
	"PERCENTAGE RECONCILED",
];

const data = [
	{
		date: "Aug 6, 2022",
		customer: (
			<div className="flex items-center gap-2">
				<Image className="w-8 h-8" alt="profile" src={MPESA} />
				<div>
					<p className="text-xs mb-1">Account Name</p>
					<p className="text-gray-500 text-xs">0293848323</p>
				</div>
			</div>
		),
		invoiceTotal: "KES 110,950.00",
		amountReceived: "KES 90,069.00",
		percentage: "82%",
	},
	{
		date: "Aug 5, 2022",
		customer: (
			<div className="flex items-center gap-2">
				<Image className="w-8 h-8" alt="profile" src={MPESA} />
				<div>
					<p className="text-xs mb-1">MPesa-ImaliPay</p>
					<p className="text-gray-500 text-xs">81 000 0000</p>
				</div>
			</div>
		),
		invoiceTotal: "KES 110,950.00",
		amountReceived: "KES 65,100.00",
		percentage: "62%",
	},
	{
		date: "Aug 4, 2022",
		customer: (
			<div className="flex items-center gap-2">
				<Image className="w-8 h-8" alt="profile" src={GTB} />
				<div>
					<p className="text-xs mb-1">ImaliPay Limited</p>
					<p className="text-gray-500 text-xs">010239521</p>
				</div>
			</div>
		),
		invoiceTotal: "KES 110,950.00",
		amountReceived: "KES 79,506.00",
		percentage: "92%",
	},
	{
		date: "Aug 4, 2022",
		customer: (
			<div className="flex items-center gap-2">
				<Image className="w-8 h-8" alt="profile" src={MPESA} />
				<div>
					<p className="text-xs mb-1">Account Name</p>
					<p className="text-gray-500 text-xs">Account No</p>
				</div>
			</div>
		),
		invoiceTotal: "KES 110,950.00",
		amountReceived: "KES 100,035.00",
		percentage: "85%",
	},
	{
		date: "Jan 3, 2022",
		customer: (
			<div className="flex items-center gap-2">
				<Image className="w-8 h-8" alt="profile" src={GTB} />
				<div>
					<p className="text-xs mb-1">Bank Account</p>
					<p className="text-gray-500 text-xs">Bank Account</p>
				</div>
			</div>
		),
		invoiceTotal: "KES 110,950.00",
		amountReceived: "KES 56,890.00",
		percentage: "72%",
	},
	{
		date: "Jan 6, 2022",
		customer: (
			<div className="flex items-center gap-2">
				<Image className="w-8 h-8" alt="profile" src={MPESA} />
				<div>
					<p className="text-xs mb-1">Account Name</p>
					<p className="text-gray-500 text-xs">91 000 0000</p>
				</div>
			</div>
		),
		invoiceTotal: "KES 110,950.00",
		amountReceived: "KES 91,481.00",
		percentage: "52%",
	},
];
