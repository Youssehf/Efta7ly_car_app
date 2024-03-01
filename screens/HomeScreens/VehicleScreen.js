import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import tw from "twrnc";

export default function VehicleScreen() {
  const tesla = require("../../assets/images/TeslaModelS.jpg");
  return (
      <ImageBackground source={tesla} style={tw`h-100% w-full bg-yellow-400`}>
        <View style={tw`flex-1 flex justify-around my-4`}>
          <Text>
            
          </Text>
        </View>
      </ImageBackground>
  );
}
