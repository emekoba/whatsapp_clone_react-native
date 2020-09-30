import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList,
} from "react-native";

import Post from "../../Components/Functional/Post";
import Icon from "../../Components/Style/Icon";
import { Contacts_List } from "../../Resources/Resources";

export default function Contacts({ navigation }) {
	navigation.setOptions({
		headerTitle: () => (
			<>
				<Text style={x.text}>Select contact</Text>
				<Text style={x.text2}>{123} contacts</Text>
			</>
		),

		headerStyle: {
			backgroundColor: "#075E54",
		},

		headerTintColor: "white",

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

	function search() {}

	function options() {}

	function getPosts() {
		return (
			<FlatList
				data={Object.keys(Contacts_List)}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<Post
						from="contacts"
						navigation={navigation}
						dp={Contacts_List[item].dp}
						name={Contacts_List[item].name}
						status={Contacts_List[item].status}
					/>
				)}
			/>
		);
	}

	return <View style={x.contacts}>{getPosts()}</View>;
}

let x = StyleSheet.create({
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

	contacts: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	text: {
		fontSize: 17,
		color: "white",
	},

	text2: {
		fontSize: 12,
		color: "white",
	},
});
