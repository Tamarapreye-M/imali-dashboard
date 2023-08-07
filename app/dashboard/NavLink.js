"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, exact, children, ...props }) => {
	const pathname = usePathname();
	const active = " font-bold text-black";
	const isActive = exact ? pathname === href : pathname.startsWith(href);

	if (isActive) {
		props.className += active;
	}

	return (
		<Link href={href} {...props}>
			{children}
		</Link>
	);
};

export default NavLink;
