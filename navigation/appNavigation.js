import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import useAuth from "../hooks/useAuth";
import HomeNav from "../screens/HomeNav";
import EditProfile from "../screens/HomeScreens/EditProfile";
import AddCar from "../screens/HomeScreens/AddCar";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const { user } = useAuth();
  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeNav">
          <Stack.Screen
            name="HomeNav"
            options={{ headerShown: false }}
            component={HomeNav}
          />
          <Stack.Screen
            name="Account"
            options={{ headerShown: false }}
            component={EditProfile}
          />
          <Stack.Screen
            name="AddCar"
            options={{ headerShown: false }}
            component={AddCar}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            options={{ headerShown: false }}
            component={WelcomeScreen}
          />
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={LoginScreen}
          />
          <Stack.Screen
            name="SignUp"
            options={{ headerShown: false }}
            component={SignUpScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
