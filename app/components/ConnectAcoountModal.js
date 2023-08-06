import React from "react";
import { MdAccountBalanceWallet } from "react-icons/md";
import { TbFileDollar } from "react-icons/tb";

const ConnectAcoountModal = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="font-semibold">Connect Account</h1>
        <p className="text-xs text-gray-400 ">
          connect your mobile account or bank account to continue
        </p>
        <div className="flex flex-col justify-between items-center my-4">
          <div className="rounded-full bg-green-200 p-2 ">
            <MdAccountBalanceWallet size={20} className="bg-green-200" />
          </div>
          <p className="text-xs">Mobile money account</p>
        </div>
        <div className="flex flex-col justify-between items-center my-4">
          <div className="rounded-full bg-orange-200 p-2 ">
            <TbFileDollar size={20} className="" />
          </div>
          <p className="text-xs">Mobile money account</p>
        </div>
      </div>
    </div>
  );
};

export default ConnectAcoountModal;
