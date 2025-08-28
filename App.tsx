import React from "react";
import { StatusBar, StyleSheet, useColorScheme, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/Navigations/Navigation";

function App() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        <Navigation />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
