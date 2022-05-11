import { SafeAreaView, StyleSheet, View, StatusBar, Text } from 'react-native';
import Form from './src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <Form />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeAreaView: {
    flex: 1,
    width: '100%',
    marginTop: StatusBar.currentHeight || 0,
  },
});
