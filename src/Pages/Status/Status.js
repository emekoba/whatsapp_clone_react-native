import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Status() {
	return <View style={x.status}></View>;
}

let x = StyleSheet.create({
	status: {
		flex: 1,
	},

	text: {
		fontSize: 30,
		color: "white",
	},
});
