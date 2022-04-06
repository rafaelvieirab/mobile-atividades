import { StyleSheet, View } from 'react-native';
import Square from './Square';

export default function Content() {
	return (
		<View style={styles.container}>
			<Square count={1} backgroundColor='#2df' />
			<Square count={2} backgroundColor='#8af' />
			<Square count={3} backgroundColor='#f0a' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 80,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
});
