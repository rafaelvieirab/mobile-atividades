import React from 'react';
import { StyleSheet, View } from 'react-native';
import KeyBoard from '../Components/KeyBoard';
import Result from '../Components/Result';

export default function Calculator() {
	const [formula, setFormula] = React.useState('');
	const [result, setResult] = React.useState(0);
	const [showFormula, setShowFormula] = React.useState(true);

	React.useEffect(() => {
		let acc = '';
		let lastOperator = '';
		let newResult = 0;

		for (let i = 0; i < formula.length; i++) {
			if (formula[i] === '.' || Number(formula[i]))
				acc += formula[i];
			else {
				newResult = calcNewResult(acc, newResult, lastOperator);
				lastOperator = formula[i];
				acc = '';
			}
		}

		if (acc !== '' && Number(acc))
			newResult = calcNewResult(acc, newResult, lastOperator);

		setResult(newResult);
	}, [formula]);

	const addKey = (text: string) => {
		if (formula === '') {
			setResult(0);
			hideFormula();
		}
		if (!showFormula) {
			setFormula('');
		}
		setFormula(formula + text);
		setShowFormula(true);

		console.log('F' + formula);
		console.log('R' + result);
	};

	const reset = () => {
		setFormula('');
		setResult(0);
	};

	const hideFormula = () => {
		setShowFormula(false);
	};

	const calcNewResult = (acc: string, newResult: number, lastOperator: string) => {
		if (lastOperator === '')
			newResult = parseFloat(acc);
		else if (lastOperator === '/')
			newResult /= parseFloat(acc);
		else if (lastOperator === '*')
			newResult *= parseFloat(acc);
		else if (lastOperator === '-')
			newResult -= parseFloat(acc);
		else if (lastOperator === '+')
			newResult += parseFloat(acc);
		return newResult;
	}

	return (
		<View style={styles.container}>
			<Result result={result} formula={formula} isShowFormula={showFormula} />
			<KeyBoard addKey={addKey} reset={reset} hideFormula={hideFormula} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: '#aaa',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});
