import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { Recent_List } from "../../Resources/Resources";
import Post from "../../Components/Functional/Post";

export default function Chats({ navigation }) {
	function getPosts() {
		return (
			<FlatList
				data={Object.keys(Recent_List)}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<Post
						from="recent"
						navigation={navigation}
						dp={Recent_List[item].dp}
						name={Recent_List[item].name}
						sent={Recent_List[item].sent}
						recieved={Recent_List[item].recieved}
						messages={Recent_List[item].messages}
						timeStamp={Recent_List[item].timeStamp}
					/>
				)}
			/>
		);
	}
	return <View style={x.chats}>{getPosts()}</View>;
}

let x = StyleSheet.create({
	chats: {
		flex: 1,
	},
});
