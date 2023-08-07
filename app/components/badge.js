import React from "react";

const Badge = ({ background, textTitle, textColor }) => {
	return (
		<div
			className={`bg-[${background}] text-[${textColor}] rounded-2xl text-[10px] px-2 flex items-center justify-center`}
		>
			{textTitle}
		</div>
	);
};

export default Badge;
