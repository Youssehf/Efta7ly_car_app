import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export default function EditProfile() {
  const blankProfile = require("../../assets/images/blankProfile.png");
  const navigation = useNavigation();
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [engine, setEngine] = useState("");

  const sendToFirestore = async () => {
    try {
      await addDoc(collection(db, "users"), {
        firstName: firstName,
        lastName: lastName,
        Address: userAddress,
      });
    } catch (e) {
      console.log("error on clicking update--->", e);
    }
  };

  return (
    <View style={tw`flex-1 bg-blue-100 pt-3`}>
      <SafeAreaView style={tw`flex justify-center border-b-2 py-5`}>
        <View style={tw`flex-row justify-start`}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw`bg-sky-700 p-2 rounded-tr-2xl rounded-bl-2xl ml-4`}
          >
            <ArrowLeftIcon size="20" color="white" />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-around gap-3`}>
          <View style={tw`flex justify-center`}>
            <View style={tw`flex-row items-baseline p-4`}>
              <Text style={tw`text-xl text-sky-700`}>Full Name: </Text>
              <Text style={tw`text-2xl font-bold`}>Youssef Sayed</Text>
            </View>
            <View style={tw`flex-row items-baseline p-4`}>
              <Text style={tw`text-xl text-sky-700`}>Full Address: </Text>
              <Text style={tw`text-2xl font-bold`}>16 Youssef Bek st. El-Bassatin Cairo, Egypt</Text>
            </View>
          </View>
          <Image source={blankProfile} style={tw`w-32 h-32 rounded-full`} />
        </View>
      </SafeAreaView>
      {/* //car name color model engine */}
      <View style={tw`flex-1 px-8 pt-8`}>
        <ScrollView style={tw``}>
          <View style={tw`form gap-4`}>
            <View style={tw`flex-row items-baseline p-4`}>
              <Text style={tw`text-2xl font-bold text-sky-700`}>Your Car, </Text>
              <Text style={tw`text-xl`}>Enter All Details.</Text>
            </View>
            <Text style={tw`text-black font-bold ml-3`}>Car Brand</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl shadow-sm mb-3`}
              value={brand}
              onChangeText={(value) => {
                setBrand(value);
              }}
              placeholder="Mercedes-Benz"
            />

            <Text style={tw`text-black font-bold ml-3`}>Car Model</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl shadow-sm mb-3`}
              value={model}
              onChangeText={(value) => {
                setModel(value);
              }}
              placeholder="AMG A35"
            />

            <Text style={tw`text-black font-bold ml-3`}>Car Color</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl shadow-sm mb-3`}
              value={color}
              onChangeText={(value) => {
                setColor(value);
              }}
              placeholder="Grey"
            />

            <Text style={tw`text-black font-bold ml-3`}>Car Engine</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl shadow-sm mb-3`}
              value={engine}
              onChangeText={(value) => {
                setEngine(value);
              }}
              placeholder="OM617"
            />

            <TouchableOpacity
              style={tw`py-3 bg-sky-700 rounded-full shadow-md`}
              onPress={() => {
                navigation.navigate("HomeNav");
                sendToFirestore();
              }}
            >
              <Text style={tw`text-xl font-bold text-center text-white`}>
                Save Changes
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}