"use client";

import { createContext, useState, useContext } from "react";
import data from "./data/data";

export const DataContext = createContext({});

export default function DataProvider({ children }) {
	const [display, setDisplay] = useState(data);
	const handleDisplay = (ev) => {
		const filtered = data.filter((each) => each.name.includes(ev.target.value));
		setDisplay(filtered);
	};
	return (
		<DataContext.Provider value={{ display, setDisplay, handleDisplay }}>
			{children}
		</DataContext.Provider>
	);
}

export const useDataContext = () => useContext(DataContext);
