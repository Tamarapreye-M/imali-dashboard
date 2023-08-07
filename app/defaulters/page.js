"use client";

import React, { useState } from "react";
// import data from "../data/data";
import data from "../data/data";

import ProfileComp from "../components/ProfileComp";
import Button from "../components/button";
import Input from "../components/Input";
import Card from "../components/Card";
import Table from "../components/Table";

import DOLLAR from "../assets/default-dollar.png";
import SHIELD from "../assets/shield-icon.svg";
import PERSON from "../assets/defaulters-account-icon.svg";

const DefaultersPage = () => {
	const [newDisplay, setNewDisplay] = useState(newData);
	const handleNewDisplay = (ev) => {
		let filtered = data.filter((each) =>
			each.name.toLowerCase().includes(ev.target.value)
		);
		let updated = filtered.map((each, i) => {
			return {
				driver: (
					<ProfileComp
						key={i}
						name={each.name}
						phoneNumber={each.phoneNumber}
						picture={each.avatar}
					/>
				),
				loanAmount: each.loanAndPriceAmount,
				date: each.date,
				loanStatus: each.loanStatus,
				view: "view",
			};
		});
		setNewDisplay(updated);
	};
	return (
		<div className="container px-10 py-8">
			<h1 className="text-3xl my-6">Defaulters</h1>
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
				<Input
					placeholder="Search for customer’s name"
					handleNewDisplay={handleNewDisplay}
				/>
				<Button textTitle="Export" textColor={"text-white"} />
			</div>
			<div>
				<Table headers={tableHeaders} data={newDisplay} />
			</div>
		</div>
	);
};

export default DefaultersPage;
const balanceData = [
	{
		image: DOLLAR,
		title: "Total outstanding balance",
		value: "$6000",
	},
	{
		image: SHIELD,
		title: "Total repayment pending ",
		value: "72,864",
	},
	{
		image: PERSON,
		title: "Total trasaction counts",
		value: "3062",
	},
];

const tableHeaders = [
	"DRIVER",
	"LOAN AMOUNT",
	"DATE REQUESTED",
	"LOAN STATUS",
	"",
];
const newData = data.map((each, i) => {
	return {
		driver: (
			<ProfileComp
				key={i}
				name={each.name}
				phoneNumber={each.phoneNumber}
				picture={each.avatar}
			/>
		),
		loanAmount: each.loanAndPriceAmount,
		date: each.date,
		loanStatus: each.loanStatus,
		view: "view",
	};
});
// console.log(newData);
