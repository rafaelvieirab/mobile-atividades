import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Content from './src/Components/Content';

export default function App() {
  return (
    <View style={styles.container}>
      <Content />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
