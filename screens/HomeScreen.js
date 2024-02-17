import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut, getAuth } from "firebase/auth";
import { auth } from "../config/firebase";
import tw from "twrnc";

export default function HomeScreen() {
  const aa = getAuth();
  const user = aa.displayName;
  if (user) {
    console.log("user is", user);
  }else {
    console.log('no user', );
  }
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <SafeAreaView
      style={tw`flex-1 flex-row justify-center items-center bg-slate-500`}
    >
      <Text style={tw`text-lg text-red-300`}>Home Page -Hii ya {} </Text>
      <TouchableOpacity
        onPress={handleLogout}
        style={tw`p-1 bg-red-400 rounded-lg`}
      >
        <Text style={tw`text-white text-lg font-bold`}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
