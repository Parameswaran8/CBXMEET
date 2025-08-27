// import React, { useEffect, useState } from 'react';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import SplaceScreen from '../Onboard/Onboard';
// import FeatureMain from '../FeatureMain/FeatureMain';
// import LoginScreen from '../Authorization/Login';
// import WebViewContainer from '../WebViewContainer/WebViewContainer';
// import { storage } from '../Context/storage';

// const Stack = createNativeStackNavigator();

// const Navigation = () => {
//   const isDarkMode = useColorScheme() === 'dark';
//   const [loading, setLoading] = useState(true); // for splash
//   const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // simulate splash screen 3s
//     setTimeout(async () => {
//       try {
//         const onboarded = await storage.getString('onboarded');
//         setIsFirstLaunch(onboarded === null); // if null → first time
//       } catch (e) {
//         console.log(e);
//         setIsFirstLaunch(true);
//       }
//       setLoading(false);
//     }, 3000); // 3 seconds
//   }, []);

//   if (loading) {
//     // show SplashScreen
//     return (
//       <View style={styles.splashContainer}>
//         <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//         <SplaceScreen />
//       </View>
//     );
//   }

//   return (
//     <NavigationContainer>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {isFirstLaunch ? (
//           // First launch → Onboarding
//           <Stack.Screen name="Onboarding">
//             {props => (
//               <FeatureMain
//                 {...props}
//                 onFinish={async () => {
//                   await storage.set('onboarded', 'true');
//                   setIsFirstLaunch(false);
//                 }}
//               />
//             )}
//           </Stack.Screen>
//         ) : !isLoggedIn ? (
//           // If not logged in → Login
//           <Stack.Screen name="Login">
//             {props => (
//               <LoginScreen
//                 {...props}
//                 onLoginSuccess={() => setIsLoggedIn(true)}
//               />
//             )}
//           </Stack.Screen>
//         ) : (
//           // After login → Main App (WebView)
//           <Stack.Screen name="WebView" component={WebViewContainer} />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Navigation;

// const styles = StyleSheet.create({
//   splashContainer: {
//     flex: 1,
//   },
// });
