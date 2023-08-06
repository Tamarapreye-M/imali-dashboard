import React from "react";
import { CiDollar } from "react-icons/ci";

const CustomerProfile = () => {
  return (
    <div className="pt-10 px-8">
      <div className="flex">
        <a className="cursor-pointer text-sm">Go back / </a>{" "}
        <p className="text-gray-400 ml-1 text-sm">Oliver Tai</p>
      </div>
      <div className="py-10 px-5 bg-white mt-6 shadow-sm flex">
        <div className="flex-1">
          <h3 className="text-2xl font-normal">{"Customer's Profile"}</h3>
          <div className="flex gap-2 mt-10 my-3">
            <div className="w-12 h-12 bg-[#f9f5ff] text-[#7f56d9] p-5 rounded-full flex justify-center items-center font-normal">
              OR
            </div>
            <div>
              <p className="text-sm">Oliver Tai</p>
              <p className="text-gray-400 text-xs">Customer</p>
            </div>
          </div>
          <div className="flex gap-4 my-1">
            <TextInput label={"First Name"} value={"Oliver"} />
            <TextInput label={"First Name"} value={"Oliver"} />
          </div>
          <TextInput label={"Phone Number"} value={"Oliver"} />
          <div className="flex gap-4 my-1">
            <TextInput label={"First Name"} value={"Oliver"} />
            <TextInput label={"First Name"} value={"Oliver"} />
          </div>
          <div className="flex gap-4 my-1">
            <TextInput label={"First Name"} value={"Oliver"} />
            <TextInput label={"First Name"} value={"Oliver"} />
          </div>
          <TextInput
            label={"Address"}
            value={"34, Sunville Estate, Macanthony Street, Ikeja"}
          />
        </div>
        <div className="w-[1px] bg-gray-300 mx-6"></div>
        <div className="flex-1 px-5 pt-16 ">
          <p className="text-xs text-gray-500 ">Transaction History</p>
          <div className="rounded-lg p-5 mt-3 flex justify-between border border-gray-200">
            <div>
              <p className="text-xs text-gray-400">Amount Loaded(NGN)</p>
              <p className="text-xl font-semibold">400,051</p>
            </div>
            <div className="w-[1px] bg-gray-200 "></div>
            <div>
              <p className="text-xs text-gray-400">Amount Paid(NGN)</p>
              <p className="text-xl font-semibold">120,000</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-400 mt-5 mb-3">Pending Payments</p>
            {pendingPaymentData.map((_, i) => (
              <div key={i} className="flex justify-between items-center my-3">
                <div className="flex items-center justify-center gap-2">
                  <div className="border border-gray-900 rounded-full p-2">
                    <CiDollar size={16} />
                  </div>
                  <div>
                    <p className="text-xs">1/4 Payment</p>
                    <p className="text-[9px] text-gray-200">21 Jul, 2022</p>
                  </div>
                  <p className="bg-red-50 text-red-500 rounded-2xl text-[10px] px-2 flex items-center justify-center ">
                    Overdue
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

export default CustomerProfile;

const TextInput = ({ label, placeholder, value }) => {
  return (
    <div className="">
      <label className="text-xs text-gray-400">{label}</label>
      <input
        className="appearance-none w-full bg-[#fafafa] leading-tight focus:outline-none focus:shadow-outline h-8 rounded-sm p-2 text-sm"
        placeholder={placeholder ?? ""}
        value={value}
      />
    </div>
  );
};

const pendingPaymentData = [1, 2, 3, 4];
