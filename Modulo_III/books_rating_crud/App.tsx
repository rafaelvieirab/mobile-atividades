import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Main from './src/components/Main';
import BookContext from './src/contexts/BookContext';
import { reducer, initialState } from './src/redux/reducer';

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <View style={styles.container}>
      <BookContext.Provider value={{ state, dispatch }}>
        <Main />
      </BookContext.Provider>
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
