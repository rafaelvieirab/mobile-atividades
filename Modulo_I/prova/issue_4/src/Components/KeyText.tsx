import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import keyStyleCommon from '../style/keyStyleCommon';

interface KeyTextProps {
	text: string;
	addKey: Function;
	styleOpcional?: object;
};

const KeyText: React.FC<KeyTextProps> = ({ text, addKey, styleOpcional }: KeyTextProps) => {
	return (
		<TouchableOpacity
			onPress={() => addKey(text)}
			activeOpacity={0.8}
			style={{
				...keyStyleCommon.button,
				...styles.container,
				...styleOpcional
			}}
		>
			<Text style={keyStyleCommon.text}>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e0e0e0',
	},
});

export default KeyText;