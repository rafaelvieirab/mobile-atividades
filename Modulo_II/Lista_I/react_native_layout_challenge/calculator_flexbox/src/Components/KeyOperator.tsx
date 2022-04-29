import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import keyStyleCommon from '../style/keyStyleCommon';

interface KeyOperatorProps {
	operator: string;
	addKey: Function;
};

const KeyOperator: React.FC<KeyOperatorProps> = ({ operator, addKey }: KeyOperatorProps) => {
	return (
		<TouchableOpacity
			onPress={() => addKey(operator)}
			style={{ ...keyStyleCommon.button, ...styles.container }}
		>
			<Text style={{ ...keyStyleCommon.text, ...styles.text }}>{operator}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f95',
	},
	text: {
		color: '#ddd',
	}
});

export default KeyOperator;