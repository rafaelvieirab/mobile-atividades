import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import keyStyleCommon from '../style/keyStyleCommon';

interface KeyOperatorACProps {
	reset: Function;
};

const KeyOperatorAC: React.FC<KeyOperatorACProps> = ({ reset }: KeyOperatorACProps) => {
	return (
		<TouchableOpacity
			onPress={() => reset()}
			style={{ ...keyStyleCommon.button, ...styles.container }}
		>
			<Text style={keyStyleCommon.text}>AC</Text>
		</TouchableOpacity >
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 3,
		height: 90,
		// width: 90 * 3,
		backgroundColor: '#e8e8e8',
	},
});

export default KeyOperatorAC;