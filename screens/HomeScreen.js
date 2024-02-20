import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./SettingsScreen";
import ProfileScreen from "./ProfileScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ConnectScreen from "./ConnectScreen";

export default function HomeScreen() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#1d4ed8",
        tabBarLabelPosition: "below-icon",
      }}
    >
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bomb" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="face-man" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Connect"
        component={ConnectScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="car" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
