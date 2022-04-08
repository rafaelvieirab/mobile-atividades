import { StyleSheet, View } from 'react-native';
import KeyOperator from './KeyOperator';
import KeyOperatorAC from './KeyOperatorAC';
import KeyOperatorResult from './KeyOperatorResult';
import KeyText from './KeyText';

interface KeyBoardProps {
	addKey: Function;
	reset: Function;
	hideFormula: Function;
};

const KeyBoard: React.FC<KeyBoardProps> = ({ addKey, reset, hideFormula }: KeyBoardProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.keyTextContainer}>
				<View style={styles.row}>
					<KeyOperatorAC reset={reset} />
					<KeyOperator addKey={addKey} operator='/' />
				</View>

				<View style={styles.row}>
					<KeyText text='7' addKey={addKey} />
					<KeyText text='8' addKey={addKey} />
					<KeyText text='9' addKey={addKey} />
					<KeyOperator addKey={addKey} operator='*' />
				</View>

				<View style={styles.row}>
					<KeyText text='4' addKey={addKey} />
					<KeyText text='5' addKey={addKey} />
					<KeyText text='6' addKey={addKey} />
					<KeyOperator addKey={addKey} operator='-' />
				</View>

				<View style={styles.row}>
					<KeyText text='1' addKey={addKey} />
					<KeyText text='2' addKey={addKey} />
					<KeyText text='3' addKey={addKey} />
					<KeyOperator addKey={addKey} operator='+' />
				</View>

				<View style={styles.row}>
					<KeyText text='0' addKey={addKey} styleOpcional={{ flex: 2, width: 90 * 2 }} />
					<KeyText text='.' addKey={addKey} />
					<KeyOperatorResult hideFormula={hideFormula} operator='=' />

				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 2,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	keyTextContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default KeyBoard;