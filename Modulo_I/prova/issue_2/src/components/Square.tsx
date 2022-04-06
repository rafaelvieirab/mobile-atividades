import { StyleSheet, View, Text } from 'react-native';

interface SquareProps {
	count: number,
	backgroundColor: string
}

const Square: React.FC<SquareProps> = ({ count, backgroundColor }: SquareProps) => {
	return (
		<View style={{ ...styles.square, backgroundColor: backgroundColor }}>
			<Text style={styles.text}>Square {count}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	square: {
		width: 80,
		height: 80,
		color: '#00a',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		color: '#222',
	}
});

export default Square;