import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const welcomeCarImage = require("../assets/images/rollsRoyasWelcome.jpg");
  return (
    <ImageBackground
      source={welcomeCarImage}
      style={tw`flex-1 bg-yellow-400`}
    >
      <View style={tw`flex-1 flex justify-around my-4`}>
        <View>
          <Text
            style={tw`text-blue-400 font-bold text-4xl text-center mx-4 mb-3`}
          >
            Efta7ly
          </Text>
          <Text style={tw`text-blue-400 font-bold text-4xl text-center mx-4`}>
            Let's Get Started!
          </Text>
        </View>
        <View style={tw`flex-row justify-center`}>
          {/* <Image
            source={require("../assets/images/welcome.png")}
            style={{ width: 350, height: 350 }}
          /> */}
        </View>
        <View style={tw`gap-5`}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={tw`py-3 bg-blue-400 mx-7 rounded-full`}
            activeOpacity={0.9}
          >
            <Text style={tw`text-xl font-bold text-center text-gray-700`}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <View style={tw`flex-row justify-center`}>
            <Text style={tw`text-white font-semibold`}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              activeOpacity={0.9}
            >
              <Text style={tw`font-semibold text-blue-400 underline ml-2`}>
                {" "}
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
