import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Table from "../components/Table";
import data from "../data/data";
import ProfileComp from "../components/ProfileComp";
import Link from "next/link";

const FulfillmentsPage = () => {
	return (
		// <FulfillmentsProfile />
		<div className="container px-10 pt-10">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl my-6">Fulfillments</h1>\
				<Button
					textTitle={"Register"}
					textColor={"text-white"}
					background={"bg-green-900"}
				/>
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

export default FulfillmentsPage;

export const TRANSACTION_STATUS = {
	SUCCESFUL: "Successful",
	FAILED: "Failed",
};

const tableHeaders = ["CUSTOMERS", "PRICE", "DATE", "VEHICLE MODEL", ""];
const newData = data.map((each, i) => {
	return {
		customer: (
			<ProfileComp
				key={i}
				name={each.name}
				phoneNumber={each.phoneNumber}
				picture={each.avatar}
			/>
		),
		price: each.depositSum,
		date: each.date,
		vehicleModel: each.vehicleModel,
		colStatus: <Link href={`/fulfillments/${each.slug}`}>{each.viewLink}</Link>,
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
