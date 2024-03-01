import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./HomeScreens/SettingsScreen";
import ProfileScreen from "./HomeScreens/ProfileScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import VehicleScreen from "./HomeScreens/VehicleScreen";
import HomeAccScreen from "./HomeScreens/HomeAccScreen";
import MapScreen from "./HomeScreens/MapScreen";

export default function HomeNav() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#1d4ed8",
        tabBarLabelPosition: "below-icon",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeAccScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),title: 'Home'
        }}
      />
      <Tab.Screen
        name="Vehicle"
        component={VehicleScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="car" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="map-marker"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bomb" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
