import Image from "next/image";
import React from "react";

const ProfileComp = ({ picture, name, phoneNumber, email }) => {
	return (
		<div className="flex items-center gap-2">
			<Image className="w-8 h-8" alt="profile" src={picture} />
			<div>
				<p className="text-xs mb-1">{name}</p>
				<p className="text-gray-500 text-xs">{phoneNumber}</p>
			</div>
		</div>
	);
};

export default ProfileComp;
