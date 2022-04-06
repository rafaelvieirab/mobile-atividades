import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Content() {
	const [name, setName] = React.useState('');

	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<Text style={styles.label}>What is your name?</Text>
				<TextInput
					value={name}
					onChangeText={setName}
					style={styles.input}
					placeholder="Type your name"
				/>
			</View>

			<View style={styles.msgContainer}>
				<Text style={styles.msg}>Hello {name}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '80%',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	form: {
		width: '100%',
		alignItems: 'flex-start',
		marginBottom: 30,
	},
	label: {
		fontWeight: 'bold',
		fontSize: 16,
		marginBottom: 12,
	},
	input: {
		width: '100%',
		backgroundColor: '#ccc',
		height: 40,
		padding: 10,
		borderWidth: 1,
		borderRadius: 8,
	},
	msgContainer: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	msg: {
		fontSize: 16,
		color: '#33e',
	},
});
