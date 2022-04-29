import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import keyStyleCommon from '../style/keyStyleCommon';

interface KeyOperatorResultProps {
	operator: string;
	hideFormula: Function
};

const KeyOperatorResult: React.FC<KeyOperatorResultProps> = ({ operator, hideFormula }: KeyOperatorResultProps) => {
	return (
		<TouchableOpacity
			onPress={() => hideFormula()}
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

export default KeyOperatorResult;