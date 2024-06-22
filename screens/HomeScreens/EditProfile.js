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
import PhoneInput from "react-native-phone-input";
import * as ImagePicker from "expo-image-picker";

export default function EditProfile() {
  const blankProfile = require("../../assets/images/blankProfile.png");
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nationalID, setNationalID] = useState("");

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
  const handleNationlInput = (text) => {
    // Allow only numbers
    const numericValue = text.replace(/[^0-9]/g, "");
    const truncatedValue = numericValue.slice(0, 14);
    setNationalID(truncatedValue);
  };
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      // If permission is denied, show an alert
      Alert.alert(
        "Permission Denied",
        `Sorry, we need camera roll permission to upload images.`
      );
    } else {
      // Launch the image library and get the selected image
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        // If an image is selected (not cancelled),update the image state variable
        setImage(result.uri);
      }
    }
  };
  return (
    <View style={tw`flex-1 bg-blue-100 pt-3`}>
      <SafeAreaView style={tw`flex justify-center py-5`}>
        <View style={tw`flex-row justify-start`}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw`bg-sky-700 p-2 rounded-tr-2xl rounded-bl-2xl ml-4`}
          >
            <ArrowLeftIcon size="20" color="white" />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center`}>
          <Text style={tw`text-2xl font-bold`}>Edit My Account</Text>
        </View>
      </SafeAreaView>

      <View style={tw`flex-1 px-8 pt-8`}>
        <ScrollView style={tw``}>
          <View style={tw`flex items-center justify-center pb-7`}>
            {/* Conditionally render the image or error message */}
            {image ? (
              // Display the selected image
              <View style={tw`w-16 h-16`}>
                <Image
                  source={{ uri: image }}
                  style={tw`w-16 h-16 rounded-full`}
                />
              </View>
            ) : (
              //display the blank image
              <View style={tw`w-16 h-16`}>
                <Image
                  source={blankProfile}
                  style={tw`w-16 h-16 rounded-full`}
                />
              </View>
            )}
            {/* Button to choose an image */}
            <TouchableOpacity
              style={tw`bg-sky-700 rounded-lg p-2 my-3`}
              onPress={pickImage}
              activeOpacity={0.9}
            >
              <Text style={tw`font-bold text-white`}>Update</Text>
            </TouchableOpacity>
          </View>
          <View style={tw`gap-4`}>
            <Text style={tw`text-black font-bold ml-3`}>First Name</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl shadow-sm mb-3`}
              value={firstName}
              onChangeText={(value) => {
                setFirstName(value);
              }}
              placeholder="Your First Name"
            />

            <Text style={tw`text-black font-bold ml-3`}>Last Name</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl shadow-sm mb-3`}
              value={lastName}
              onChangeText={(value) => {
                setLastName(value);
              }}
              placeholder="Your Last Name"
            />
            <Text style={tw`text-black font-bold ml-3`}>Full Address</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl shadow-sm mb-3`}
              value={userAddress}
              onChangeText={(value) => {
                setUserAddress(value);
              }}
              placeholder="Your Address"
            />
            <Text style={tw`text-black font-bold ml-3`}>Phone Number</Text>
            <PhoneInput
              value={phoneNumber}
              onChangePhoneNumber={(number) => setPhoneNumber(number)}
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl shadow-sm mb-3`}
            />
            <Text style={tw`text-black font-bold ml-3`}>Your National ID</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl shadow-sm mb-3`}
              onChangeText={handleNationlInput}
              value={nationalID}
              keyboardType="numeric"
              placeholder="Enter numbers only"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              style={tw`py-3 bg-sky-700 rounded-full shadow-md`}
              onPress={() => {
                navigation.navigate("HomeNav");
                sendToFirestore();
              }}
            >
              <Text style={tw`text-xl font-bold text-center text-white`}>
                Update My Data
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}