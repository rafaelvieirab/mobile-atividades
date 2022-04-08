import { StyleSheet, View } from 'react-native';
import KeyOperator from './KeyOperator';
import KeyOperatorAC from './KeyOperatorAC';
import KeyOperatorResult from './KeyOperatorResult';
import KeyText from './KeyText';

interface KeyBoard_OriginProps {
	addKey: Function;
	reset: Function;
	hideFormula: Function;
};

const KeyBoard_Origin: React.FC<KeyBoard_OriginProps> = ({ addKey, reset, hideFormula }: KeyBoard_OriginProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.keyTextContainer}>
				<KeyOperatorAC reset={reset} />

				<View style={styles.row}>
					<KeyText text='7' addKey={addKey} />
					<KeyText text='8' addKey={addKey} />
					<KeyText text='9' addKey={addKey} />
				</View>

				<View style={styles.row}>
					<KeyText text='4' addKey={addKey} />
					<KeyText text='5' addKey={addKey} />
					<KeyText text='6' addKey={addKey} />
				</View>

				<View style={styles.row}>
					<KeyText text='1' addKey={addKey} />
					<KeyText text='2' addKey={addKey} />
					<KeyText text='3' addKey={addKey} />
				</View>
				<View style={styles.row}>
					<KeyText text='0' addKey={addKey} styleOpcional={{ flex: 2, width: 90 * 2 }} />
					<KeyText text='.' addKey={addKey} />
				</View>
			</View>

			<View style={styles.keyOperatorContainer}>
				<KeyOperator addKey={addKey} operator='/' />
				<KeyOperator addKey={addKey} operator='*' />
				<KeyOperator addKey={addKey} operator='-' />
				<KeyOperator addKey={addKey} operator='+' />
				<KeyOperatorResult hideFormula={hideFormula} operator='=' />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 2,
		flexDirection: 'row',
		padding: 10,
		backgroundColor: '#00a',
		alignItems: 'center',
		justifyContent: 'center',
	},
	keyTextContainer: {
		width: '70%',
	},
	row: {
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	keyOperatorContainer: {
		width: '30%',
	},
});

export default KeyBoard_Origin;