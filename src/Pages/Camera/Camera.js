import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Camera({ navigation }) {
	navigation.setOptions({
		headerStyle: {
			backgroundColor: "#075E54",
			elevation: 0,
		},

		headerTitleStyle: { color: "white" },
	});

	return (
		<View style={x.camera}>
			<Text style={x.text}>Camera</Text>
		</View>
	);
}

let x = StyleSheet.create({
	camera: {
		flex: 1,
		// backgroundColor: "#8293ee",
		justifyContent: "center",
		alignItems: "center",
	},

	text: {
		fontSize: 30,
		// color: "white",
	},
});
