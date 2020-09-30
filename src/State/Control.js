import React, { createContext, useState } from "react";
import { Resources } from "../Resources/Resources";

export const Brim = createContext();

export const Control = (props) => {
	const [control, setcontrol] = useState({
		//GLOBALS.................................................................

		swatch: "#8293ee",

		dp: Resources.dp,
	});

	return (
		<Brim.Provider value={[control, setcontrol]}>
			{props.children}
		</Brim.Provider>
	);
};
