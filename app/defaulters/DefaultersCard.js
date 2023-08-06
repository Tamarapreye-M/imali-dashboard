import React from "react";
import Image from "next/image";

function DefaultersCard({ image, title, value }) {
  return (
    <div className="rounded-small shadow-md min-w-[100px] p-8 bg-[#ffff]">
      <Image src={image} alt={"card-img"} className="w-14 h-14" />

      <p className=" my-2 mt-8">{title}</p>
      <p className=" font-bold text-2xl mt-2">{value}</p>
    </div>
  );
}

export default DefaultersCard;
