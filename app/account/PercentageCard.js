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
				{/* <svg
					xmlns="http://www.w3.org/2000/svg"
					width="132"
					height="132"
					viewBox="0 0 132 132"
					fill="none"
				>
					<circle cx="66" cy="66" r="66" fill="#FFF0D1" />
					<circle
						cx="66"
						cy="66"
						r="62.5"
						stroke="black"
						stroke-opacity="0.05"
						stroke-width="7"
					/>
				</svg> */}
			</div>
		</div>
	);
};

export default PercentageCard;
