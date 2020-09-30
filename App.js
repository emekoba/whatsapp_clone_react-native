import React from "react";
import { Control } from "./src/State/Control";
import Pages from "./src/Pages/Pages";
import { StatusBar } from "react-native";

export default function App() {
	return (
		<Control>
			<StatusBar backgroundColor="#075E54" />
			<Pages />
		</Control>
	);
}
