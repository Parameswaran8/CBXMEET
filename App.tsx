/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from "@react-native/new-app-screen";
import { StatusBar, StyleSheet, useColorScheme, View } from "react-native";
import FeatureMain from "./src/FeatureMain/FeatureMain";
import SplaceScreen from "./src/Onboard/Onboard";
import LoginScreen from "./src/Authorization/Login";
import WebViewContainer from "./src/WebViewContainer/WebViewContainer";
// import Navigation from './src/Navigations/Navigation';

function App() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      {/* <Navigation /> */}
      {/* <SplaceScreen /> */}
      {/* <FeatureMain /> */}
      {/* <LoginScreen /> */}
      {/* <WebViewContainer /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
