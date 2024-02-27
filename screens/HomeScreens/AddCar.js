import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StyleSheet,
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
    const [carPhoto, setCarPhoto] = useState(null);
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
          setCarPhoto(result.uri);
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
            <Text style={tw`text-2xl font-bold`}>Add Vehicle</Text>
          </View>
        </SafeAreaView>
  
        <View style={tw`flex-1 px-8 pt-8`}>
          <ScrollView style={tw``}>
          <View style={styles.container}> 
            <Text style={styles.header}> 
                Add Image: 
            </Text> 
  
            {/* Button to choose an image */} 
            <TouchableOpacity style={styles.button} 
                onPress={pickImage}> 
                <Text style={styles.buttonText}> 
                    Choose Image 
                </Text> 
            </TouchableOpacity> 
  
            {/* Conditionally render the image  
            or error message */} 
            {file ? ( 
                // Display the selected image 
                <View  style={tw`w-16 h-16`}> 
                    <Image source={{ uri: carPhoto }} 
                         style={tw`w-16 h-16 rounded-full`} /> 
                </View> 
            ) : ( 
                // Display an error message if there's  
                // an error or no image selected 
                <Text style={styles.errorText}>{error}</Text> 
            )} 
        </View> 
            <View style={tw`form gap-4`}>
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
                onPress={sendToFirestore}
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
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
    },
    phoneInput: {
      // height: 50,
      // width: "100%",
      // borderWidth: 1,
      // borderColor: "#154862",
      // marginBottom: 20,
      // paddingHorizontal: 10,
      padding: 16 /* p-4 */,
      backgroundColor: "#f3f4f6" /* bg-gray-100 */,
      color: "#4b5563" /* text-gray-700 */,
      borderRadius: 16 /* rounded-2xl */,
      marginBottom: 12 /* mb-3 */,
    },
    countryButton: {
      marginBottom: 20,
    },
    countryPickerButton: {
      borderRadius: 5,
      backgroundColor: "#fff",
      marginBottom: 20,
    },
    countryPickerCloseButton: {
      width: 20,
      height: 20,
    },
    submitButton: {
      width: "100%",
    },
    shadowProp: {
      shadowColor: "#171717",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    elevation: {
      elevation: 20,
      shadowColor: "#52006A",
    },
  });
  