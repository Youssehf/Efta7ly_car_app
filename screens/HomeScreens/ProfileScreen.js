import { View, Text, TouchableOpacity } from "react-native";
import { signOut, getAuth } from "firebase/auth";
import { auth } from "../../config/firebase";
import React from "react";
import tw from "twrnc";

export default function ProfileScreen() {
  const aa = getAuth();
  const user = aa.displayName;
  if (user) {
    console.log("user is", user);
  } else {
    console.log("no user");
  }
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <View style={tw`flex-1 flex-row justify-center items-center bg-slate-500`}>
      <Text style={tw`text-lg text-red-300`}>Settings! {} </Text>
      <TouchableOpacity
        onPress={handleLogout}
        style={tw`p-1 bg-red-400 rounded-lg`}
      >
        <Text style={tw`text-white text-lg font-bold`}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
