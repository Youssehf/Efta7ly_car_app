// import { StatusBar } from 'expo-status-bar';
// import { Image, StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.words}>Hi!</Text>
//       <Image source={require("./assets/favicon.png")}></Image>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#2525",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   words: {
//     color: "red",
//   },
// });
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppNavigation from "./navigation/appNavigation";

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from './screens/HomeScreen';
// import GameStore from './screens/gameStore';

// const Tab = createBottomTabNavigator();

export default function App() {
  return <AppNavigation />;
}
