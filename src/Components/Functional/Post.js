import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableNativeFeedback,
	TouchableOpacity,
} from "react-native";

import Icon from "../Style/Icon";

export default function Post({ navigation, name, dp, messages, from, status }) {
	const [colors] = useState([
		"#EEDD82",
		"lightblue",
		"lightgreen",
		"#dd82ee",

		// "#8293ee",
		// "#f2476a",

		// "#82eedd",
		// "#2f95dc",
		// "tomato",
	]);

	function openPost() {
		setTimeout(() => {
			navigation.navigate("ChatRoom", {
				dp: dp,
				name: name,
				messages: messages,
			});
		}, 1000);
	}

	function viewDp() {}

	return (
		<>
			{from === "recent" && (
				<TouchableNativeFeedback
					background={TouchableNativeFeedback.Ripple()}
					onPress={openPost}
				>
					<View style={x.post}>
						<TouchableOpacity onPress={viewDp}>
							<Image source={dp} style={x.dp} resizeMode="cover" />
						</TouchableOpacity>

						<View style={x.side_box}>
							<View style={x.name_date}>
								<Text style={x.name}>{name}</Text>
								<Text style={x.date}>05/02/1997</Text>
							</View>

							<Text style={x.preview}>{messages[0].value}</Text>
						</View>
					</View>
				</TouchableNativeFeedback>
			)}

			{from === "contacts" && (
				<TouchableNativeFeedback
					background={TouchableNativeFeedback.Ripple()}
					onPress={openPost}
				>
					<View style={x.post}>
						<TouchableOpacity onPress={viewDp}>
							<Image source={dp} style={y.dp} resizeMode="cover" />
						</TouchableOpacity>

						<View style={y.side_box}>
							<Text style={x.name}>{name}</Text>
							<Text style={x.status}>{status}</Text>
						</View>
					</View>
				</TouchableNativeFeedback>
			)}
		</>
	);
}

const x = StyleSheet.create({
	post: {
		height: 80,
		width: "100%",
		flexDirection: "row",
		// padding: 10,
		alignItems: "center",
	},

	dp: {
		height: 55,
		width: 55,
		borderRadius: 55 / 2,
		margin: 10,
	},

	side_box: {
		width: "79%",
		height: "100%",
		padding: 10,
		justifyContent: "center",
		borderBottomWidth: 1,
		borderColor: "#E7D08B",
		borderColor: "rgba(231, 238, 241, 1)",
	},

	name_date: {
		marginBottom: 5,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	name: {
		// fontWeight: "bold",
		fontSize: 17,
	},

	date: {
		fontSize: 12,
		textAlignVertical: "bottom",
	},

	status: {
		fontSize: 12,
		textAlignVertical: "bottom",
	},

	preview: {
		fontSize: 13,
		color: "grey",
	},
});

const y = StyleSheet.create({
	dp: {
		height: 40,
		width: 40,
		borderRadius: 40 / 2,
		margin: 10,
	},

	side_box: {
		width: "79%",
		height: "100%",
		padding: 10,
		justifyContent: "center",
	},
});
