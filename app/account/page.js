import React from "react";
import AccountCard from "./AccountCard";
import Image from "next/image";
import Input from "../components/Input";
import Button from "../components/Button";
import Table from "../components/Table";
import DOLLAR from "../assets/dollar-black.png";
import OLIVIA from "../assets/olivia-avatar.png";
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
  return (
    <div className="container px-10 pt-10">
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
    image: DOLLAR,
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
  "CUSTOMERS",
  "DEPOSITS",
  "DATE",
  "VOUCHER NO.",
  "TRANS. STATUS",
];

const data = [
  {
    customer: (
      <div className="flex items-center gap-2">
        <Image className="w-8 h-8" alt="profile" src={OLIVIA} />
        <div>
          <p className="text-xs mb-1">Olivia Rhye</p>
          <p className="text-gray-500 text-xs">+234 803 0000</p>
        </div>
      </div>
    ),
    deposit: "NGN 34,600",
    data: "Jan 6, 2022 • 09:21",
    voucherNo: "HKJKD",
    transactionStatus: TRANSACTION_STATUS.SUCCESFUL,
  },
  {
    customer: (
      <div className="flex items-center gap-2">
        <Image className="w-8 h-8" alt="profile" src={OLIVIA} />
        <div>
          <p className="text-xs mb-1">Olivia Rhye</p>
          <p className="text-gray-500 text-xs">+234 803 0000</p>
        </div>
      </div>
    ),
    deposit: "NGN 34,600",
    data: "Jan 6, 2022 • 09:21",
    voucherNo: "HKJKD",
    transactionStatus: TRANSACTION_STATUS.FAILED,
  },
  {
    customer: (
      <div className="flex items-center gap-2">
        <Image className="w-8 h-8" alt="profile" src={OLIVIA} />
        <div>
          <p className="text-xs mb-1">Olivia Rhye</p>
          <p className="text-gray-500 text-xs">+234 803 0000</p>
        </div>
      </div>
    ),
    deposit: "NGN 34,600",
    data: "Jan 6, 2022 • 09:21",
    voucherNo: "HKJKD",
    transactionStatus: TRANSACTION_STATUS.SUCCESFUL,
  },
  {
    customer: (
      <div className="flex items-center gap-2">
        <Image className="w-8 h-8" alt="profile" src={OLIVIA} />
        <div>
          <p className="text-xs mb-1">Olivia Rhye</p>
          <p className="text-gray-500 text-xs">+234 803 0000</p>
        </div>
      </div>
    ),
    deposit: "NGN 34,600",
    data: "Jan 6, 2022 • 09:21",
    voucherNo: "HKJKD",
    transactionStatus: TRANSACTION_STATUS.SUCCESFUL,
  },
];
