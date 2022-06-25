import React from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';
import Main from './src/components/Main';
import ThemeSwitcher from './src/components/ThemeSwitcher';
import { themes } from './src/constraints/Themes';
import ThemeContext from './src/contexts/ThemeContext';

export default function App() {
  const [theme, setTheme] = React.useState(themes.light);

  const toggleTheme = () => {
    const newTheme = theme === themes.dark ? themes.light : themes.dark;
    setTheme(newTheme);
  };

  return (
    <View style={styles.container}>
      <ThemeContext.Provider value={theme}>
        <ThemeSwitcher toggleTheme={toggleTheme} />
        <Main />
      </ThemeContext.Provider>
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
