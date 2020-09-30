import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	ImageBackground,
	TextInput,
	Keyboard,
} from "react-native";

import Icon from "../../Components/Style/Icon";
import { Resources } from "../../Resources/Resources";

export default function ChatRoom({ navigation, route }) {
	const { dp, name, messages } = route.params;

	const [input, setinput] = useState("");

	navigation.setOptions({
		headerStyle: {
			backgroundColor: "#075E54",
			elevation: 0,
		},

		headerLeft: () => (
			<View style={x.title_box}>
				<TouchableOpacity style={x.back} onPress={goBack}>
					<Icon name="back" />

					<Image source={dp} style={x.dp} resizeMode="cover" />
				</TouchableOpacity>

				<Text style={x.name}>{name}</Text>
			</View>
		),

		title: "",

		headerTintColor: "white",

		headerRight: () => (
			<View style={x.icons}>
				<TouchableOpacity onPress={vidCall}>
					<Icon name="video" />
				</TouchableOpacity>

				<TouchableOpacity onPress={phoneCall}>
					<Icon name="phone" />
				</TouchableOpacity>

				<TouchableOpacity onPress={options}>
					<Icon name="options" />
				</TouchableOpacity>
			</View>
		),
	});

	function goBack() {
		Keyboard.dismiss();

		navigation.goBack();
	}

	function vidCall() {}

	function phoneCall() {}

	function options() {}

	function record() {}

	return (
		<View style={x.chatroom}>
			<ImageBackground source={Resources.background9} style={x.background}>
				<View style={x.inputbox}>
					<View style={x.inner_box}>
						<TouchableOpacity style={x.input_icon}>
							<Icon name="smiley" />
						</TouchableOpacity>

						<TextInput
							style={x.input}
							onChangeText={(text) => setinput(text)}
							value={input}
							placeholder="Type a message"
							placeholderTextColor="lightslategrey"
							// autoFocus={true}
						/>

						<TouchableOpacity style={x.input_icon}>
							<Icon name="clip" />
						</TouchableOpacity>

						<TouchableOpacity style={{ ...x.input_icon, marginLeft: 13 }}>
							<Icon name="cam-sm" />
						</TouchableOpacity>
					</View>

					<TouchableOpacity style={x.mic} onPress={record}>
						<Icon name="mic" />
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
}

let x = StyleSheet.create({
	title_box: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		width: 250,
		paddingLeft: 10,
	},

	back: {
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 30,
	},

	dp: {
		height: 33,
		width: 33,
		borderRadius: 33 / 2,
		margin: 10,
	},

	name: {
		fontSize: 18,
		color: "white",
	},

	icons: {
		height: "100%",
		width: 130,
		justifyContent: "space-around",
		alignItems: "center",
		flexDirection: "row",
	},

	icon: {
		justifyContent: "center",
		alignItems: "center",
	},

	chatroom: {
		flex: 1,
	},

	background: {
		height: "100%",
		width: "100%",
	},

	inputbox: {
		position: "absolute",
		bottom: 5,
		width: "100%",
		height: 50,
		flexDirection: "row",
		alignItems: "center",
	},

	inner_box: {
		backgroundColor: "white",
		borderRadius: 35,
		flex: 1,
		height: 46,
		margin: 10,
		marginRight: 0,
		flexDirection: "row",
		paddingRight: 10,
		paddingLeft: 10,
	},

	input: {
		flex: 1,
		marginLeft: 5,
	},

	input_icon: {
		height: "100%",
		width: 30,
		justifyContent: "center",
		alignItems: "center",
	},

	mic: {
		height: 48,
		width: 48,
		borderRadius: 48 / 2,
		backgroundColor: "#128C7E",
		margin: 10,
		justifyContent: "center",
		alignItems: "center",
	},
});
