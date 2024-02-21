import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import tw from "twrnc";

export default function HomeAccScreen() {
  const myCar = require("../../assets/images/rr.png");
  return (
    <View style={tw`flex flex-col bg-blue-100`}>
      <View style={tw`flex items-center justify-center my-9`}>
        <Text style={tw`text-2xl py-2`}>Good Morning, JUILE 🌅</Text>
        <Text style={tw`text-2xl py-2`}>Member ID: 123456987</Text>
        <Text style={tw`text-2xl py-2`}>Good Morning,</Text>
      </View>
      <View style={tw``}>
        <View style={tw`flex flex-row items-center justify-between py-9`}>
          <Text style={tw`pl-8 text-2xl font-bold`}>MY VEHICLES</Text>
          <TouchableOpacity style={tw`pr-8`}>
            <MaterialCommunityIcons name="plus-circle" size={35} />
          </TouchableOpacity>
        </View>
        <View
          style={tw`flex flex-row items-center justify-start gap-9 bg-blue-200 m-8 rounded-xl`}
        >
          <Image source={myCar} style={tw`w-48 h-48 mx-7`} />
          <View>
            <Text style={tw`text-2xl py-2`}>MY BMW</Text>
            <Text style={tw`text-2xl`}>BMW x7</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
