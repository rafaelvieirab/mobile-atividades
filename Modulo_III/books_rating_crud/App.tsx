import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import BookDetail from './src/pages/BookDetail';
import BookList from './src/pages/BookList';
import { Routes } from './src/constraints/Routes';
import BookContext from './src/contexts/BookContext';
import { reducer, initialState } from './src/redux/reducer';

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <BookContext.Provider value={{ state, dispatch }}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='BookList'>
              <Stack.Screen name={Routes.BookList} component={BookList} options={{ headerTitleAlign: 'center' }} />
              <Stack.Screen name={Routes.BookDetail} component={BookDetail} options={{ headerTitleAlign: 'center' }} />
            </Stack.Navigator>
          </NavigationContainer>
        </BookContext.Provider>
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
