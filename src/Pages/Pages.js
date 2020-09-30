import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, LogBox, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
	createStackNavigator,
	CardStyleInterpolators,
} from "@react-navigation/stack";
import { FAB } from "react-native-paper";

import Icon from "../Components/Style/Icon";
import Calls from "./Calls/Calls";
import Chats from "./Chats/Chats";
import Camera from "./Camera/Camera";
import Status from "./Status/Status";
import ChatRoom from "./ChatRoom/ChatRoom";
import Contacts from "./Contacts/Contacts";

import Float from "../Components/Functional/Float";

LogBox.ignoreLogs([
	"Cannot update a component from inside the function body of a different component",
]);

export default function Pages() {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Lounge" component={Lounge} />
				<Stack.Screen name="Camera" component={Camera} />
				<Stack.Screen name="ChatRoom" component={ChatRoom} />
				<Stack.Screen name="Contacts" component={Contacts} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

function Lounge({ navigation }) {
	navigation.setOptions({
		title: "Whatsapp",

		headerStyle: {
			backgroundColor: "#075E54",
			elevation: 0,
		},

		headerTitleStyle: { color: "white" },

		headerRight: () => (
			<View style={x.icons}>
				<TouchableOpacity onPress={search}>
					<Icon name="search" />
				</TouchableOpacity>

				<TouchableOpacity onPress={options}>
					<Icon name="options" />
				</TouchableOpacity>
			</View>
		),
	});

	const Tab = createMaterialTopTabNavigator();

	function search() {}

	function options() {}

	function openContacts() {
		navigation.navigate("Contacts");
	}

	return (
		<>
			<Tab.Navigator
				tabBarOptions={{
					tabStyle: { backgroundColor: "#075E54" },
					activeTintColor: "white",
					labelStyle: { fontWeight: "bold" },
				}}
			>
				{/* <Tab.Screen name="Cam" component={Cam} /> */}
				<Tab.Screen name="Chats" component={Chats} />
				<Tab.Screen name="Status" component={Status} />
				<Tab.Screen name="Calls" component={Calls} />
			</Tab.Navigator>

			<FAB style={x.fab} icon="message" color="white" onPress={openContacts} />
		</>
	);
}

function Cam({ focused, navigation }) {
	useEffect(() => {
		navigation.navigate("Camera");
	});

	return null;
}

const x = StyleSheet.create({
	icons: {
		height: "100%",
		width: 100,
		justifyContent: "space-around",
		alignItems: "center",
		flexDirection: "row",
	},

	icon: {
		justifyContent: "center",
		alignItems: "center",
	},

	fab: {
		position: "absolute",
		margin: 20,
		marginBottom: 20,
		right: 0,
		bottom: 0,
		backgroundColor: "#25D366",
	},
});
