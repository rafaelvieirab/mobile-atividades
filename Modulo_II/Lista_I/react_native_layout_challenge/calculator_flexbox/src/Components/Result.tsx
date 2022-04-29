import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ResultProps {
	formula: string;
	result: number;
	isShowFormula: boolean;
};

const Result: React.FC<ResultProps> = ({ formula, result, isShowFormula }: ResultProps) => {
	const [fontSizeFormula, setFontSizeFormula] = React.useState(32);

	React.useEffect(() => {
		const fontSize = (formula.length < 8) ? 32 : 24;
		setFontSizeFormula(fontSize);
	}, [formula]);

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				{formula === '' || !isShowFormula
					? <Text style={styles.highlightedResult}>{result}</Text>
					: (
						<>
							<Text style={{ ...styles.formula, fontSize: fontSizeFormula }}>{formula}</Text>
							<Text style={styles.result}>{result}</Text>
						</>
					)
				}
			</View>
		</View >
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		width: '100%',
		backgroundColor: '#999',
		alignItems: 'center',
		justifyContent: 'center',
	},
	content: {
		flex: 1,
		width: '100%',
		padding: 30,
		alignItems: 'flex-end',
		justifyContent: 'space-evenly',
	},
	formula: {
		textAlign: 'right',
	},
	result: {
		textAlign: 'right',
		fontSize: 28,
	},
	highlightedResult: {
		textAlign: 'right',
		fontSize: 60,
	},
});
export default Result;
