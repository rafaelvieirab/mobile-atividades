import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState<number>(0);

  const incrementCount = () => setCount(count+1);

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.text}> You've pressed the button: {count} time(s)</Text>
        <Button 
          onPress={incrementCount} 
          title="Press me" 
          accessibilityLabel="Pressione para incrementar o valor do count" 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group: {
    flex: 1,
    marginTop: 64,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    marginTop: 32,
    marginBottom: 24,
  },
});
