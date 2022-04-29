import { StyleSheet } from "react-native";

const keyStyleCommon = StyleSheet.create({
	button: {
		flex: 1,
		height: 90,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#aaa',
		borderWidth: 1,
		borderRadius: 4,
	},
	text: {
		color: '#222',
		fontSize: 24,
		fontWeight: 'bold',
	},
});

export default keyStyleCommon;