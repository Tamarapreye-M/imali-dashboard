import Image from "next/image";
import React from "react";
import YELLOW from "../assets/full-circle.png";
import HALFCIRCLE from "../assets/half-circle.png";

const PercentageCard = () => {
  return (
    <div className="rounded-small shadow-md min-w-[100px] w-full p-8 bg-[#ffff] flex">
      <div className="mt-8">
        <p className=" my-2 mt-8">Reconcile</p>
        <p className=" font-bold mt-2 flex items-end">
          <span className="text-2xl ">53</span>
          <span className="text-lg text-gray-400">/100%</span>
        </p>
      </div>
      <div className="relative">
        <Image src={YELLOW} alt={"circle-img"} className="w-14 h-14" />
        <Image
          src={HALFCIRCLE}
          alt={"circle-img"}
          className="w-14 h-14 top-0 left-0"
        />
      </div>
    </div>
  );
};

export default PercentageCard;
