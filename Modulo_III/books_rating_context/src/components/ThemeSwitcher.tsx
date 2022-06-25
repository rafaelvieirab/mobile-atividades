import React from "react";
import { StyleSheet, Switch, View } from "react-native";

type ThemeSwitcherProps = {
  toggleTheme: Function;
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ toggleTheme }: ThemeSwitcherProps) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    toggleTheme();
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    right: 20,
    zIndex: 2,
    marginTop: 16,
  }
});

export default ThemeSwitcher;