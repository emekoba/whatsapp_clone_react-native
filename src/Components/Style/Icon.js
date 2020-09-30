import {
	Ionicons,
	Entypo,
	MaterialCommunityIcons,
	Octicons,
	AntDesign,
	MaterialIcons,
	Feather,
	SimpleLineIcons,
	FontAwesome,
	FontAwesome5,
	Foundation,
	Fontisto,
	Zocial,
	EvilIcons,
} from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "./constants/Colors";

export default function Icon({ name, focused, color }) {
	return (
		<View>
			{/* CHATROOM................................................................................................................................................. */}

			{name === "smiley" && <Octicons name="smiley" size={21} color="grey" />}

			{name === "clip" && (
				<FontAwesome name="paperclip" size={25} color="grey" />
			)}

			{name === "cam-sm" && (
				<FontAwesome name="camera" size={20} color="grey" />
			)}

			{name === "mic" && <MaterialIcons name="mic" size={25} color="white" />}

			{/* HEADER................................................................................................................................................. */}

			{name === "video" && (
				<MaterialIcons name="videocam" size={23} color="white" />
			)}

			{name === "phone" && (
				<MaterialIcons name="local-phone" size={20} color="white" />
			)}

			{name === "back" && (
				<Ionicons name="md-arrow-back" size={22} color="white" />
			)}

			{name === "search" && <Feather name="search" size={20} color="white" />}

			{name === "options" && (
				<SimpleLineIcons name="options-vertical" size={16} color="white" />
			)}

			{/* TAB................................................................................................................................................. */}

			{name === "camera" && <FontAwesome name="camera" size={20} />}

			{name === "chat" && (
				<MaterialCommunityIcons
					name="message-text-outline"
					size={16}
					color="white"
				/>
			)}
		</View>
	);
}

const x = StyleSheet.create({});
