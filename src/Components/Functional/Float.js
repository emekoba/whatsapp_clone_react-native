import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FAB, Portal, Provider } from "react-native-paper";

export default function Float() {
	const [state, setState] = useState({ open: false });

	const onStateChange = ({ open }) => setState({ open });

	const { open } = state;

	function openStatus() {}

	return (
		<Provider>
			<Portal>
				<FAB.Group
					open={open}
					color="white"
					style={x.float}
					icon={open ? "camera" : "message"}
					fabStyle={{ backgroundColor: "#25d366" }}
					actions={[
						{
							icon: "pencil",
							onPress: () => console.log(openStatus),
						},
					]}
					theme={{ colors: { accent: "red" } }}
					onStateChange={onStateChange}
					onPress={() => {
						if (open) {
							// do something if the speed dial is open
						}
					}}
				/>
			</Portal>
		</Provider>
	);
}

const x = StyleSheet.create({
	float: {
		paddingRight: 20,
		paddingBottom: 20,
	},
});
