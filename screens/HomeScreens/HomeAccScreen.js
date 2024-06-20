import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import tw from "twrnc";
import { AuthContext } from "../../context/AuthContext";
import myCarImage from "../../assets/images/rr.png";

export default function HomeAccScreen() {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <ScrollView style={tw`flex flex-col bg-blue-100 px-5`}>
      <View style={tw`flex items-center justify-center my-9`}>
        {user && (
          <Text style={tw`text-2xl py-2`}>Good Morning, {user.displayName}! 🌅</Text>
        )}
        <Text style={tw`text-2xl py-2`}>Member ID: 123456987</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Account");
          }}
        >
          <Text style={tw`text-2xl py-2 underline`}>View & edit profile</Text>
        </TouchableOpacity>
      </View>

      <View style={tw``}>
        <View style={tw`flex flex-row items-center justify-between py-9`}>
          <Text style={tw`pl-8 text-2xl font-bold`}>MY VEHICLES</Text>
          <TouchableOpacity
            style={tw`pr-8`}
            onPress={() => {
              navigation.navigate("AddCar");
            }}
          >
            <MaterialCommunityIcons name="plus-circle" size={35} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <View style={tw`flex flex-row items-center justify-start gap-9 bg-blue-200 rounded-xl`}>
            <Image source={myCarImage} style={tw`h-48 ml-7 flex-2`} />
            <View style={tw`flex-2`}>
              <Text style={tw`text-2xl py-2`}>MY BMW</Text>
              <Text style={tw`text-2xl`}>BMW x6 2018</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={tw``}>
        <View style={tw`flex flex-row items-center justify-between py-9`}>
          <Text style={tw`pl-8 text-2xl font-bold`}>MY ACCOUNT</Text>
        </View>

        <View style={tw`flex flex-row flex-wrap items-center gap-3 `}>
          <View style={tw`flex flex-3 justify-center items-center bg-blue-200 rounded-xl p-5`}>
            <Text style={tw`text-2xl py-2`}>Settings</Text>
            <MaterialIcons name="settings" size={80} color="black" />
          </View>

          <View style={tw`flex flex-3 justify-center items-center bg-blue-200 rounded-xl p-5`}>
            <Text style={tw`text-2xl py-2`}>Car Status</Text>
            <FontAwesome5 name="car" size={75} color="black" />
          </View>
        </View>

        <View style={tw`flex flex-row flex-wrap items-center gap-3 py-4 `}>
          <View style={tw`flex flex-3 justify-center items-center bg-blue-200 rounded-xl p-5`}>
            <Text style={tw`text-2xl py-2`}>Call Support</Text>
            <MaterialIcons name="support-agent" size={80} color="black" />
          </View>

          <View style={tw`flex flex-3 justify-center items-center bg-blue-200 rounded-xl p-5`}>
            <Text style={tw`text-2xl py-2`}>Bluetooth</Text>
            <FontAwesome5 name="bluetooth" size={75} color="black" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
