import React from "react";

const Badge = ({ background, textTitle, textColor }) => {
	return (
		<div className={`bg-[${background}] text-[${textColor}]`}>{textTitle}</div>
	);
};

export default Badge;
