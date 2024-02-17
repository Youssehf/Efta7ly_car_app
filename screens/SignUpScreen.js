import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import tw from "twrnc";

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.log("got error: ", err.message);
      }
    }
  };
  return (
    <View style={tw`flex-1 bg-slate-800 pt-3`}>
      <SafeAreaView style={tw`flex`}>
        <View style={tw`flex-row justify-start`}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw`bg-sky-700 p-2 rounded-tr-2xl rounded-bl-2xl ml-4`}
          >
            <ArrowLeftIcon size="20" color="white" />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center`}>
          <Image
            source={require("../assets/images/rr.png")}
            style={{ width: 350, height: 200 }}
          />
        </View>
      </SafeAreaView>

      <View style={tw`flex-1 bg-zinc-600 px-8 pt-8 rounded-t-lg`}>
        <ScrollView>
          <View style={tw`flex items-center`}>
            <Text style={tw`text-2xl font-bold mb-4`}>Create Account</Text>
          </View>
          <View style={tw`form gap-4`}>
            <Text style={tw`text-black font-bold ml-3`}>Full Name</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl shadow-lg mb-3`}
              value={userName}
              onChangeText={(value)=>{setUserName(value)}}
              placeholder="Enter Name"
            />
            <Text style={tw`text-black font-bold ml-3`}>Email Address</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl shadow-lg mb-3`}
              value={email}
              onChangeText={(value) => setEmail(value)}
              placeholder="Enter Email"
            />
            <Text style={tw`text-black font-bold ml-3`}>Password</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl shadow-lg mb-7`}
              secureTextEntry
              value={password}
              onChangeText={(value) => setPassword(value)}
              placeholder="Enter Password"
            />
            <TouchableOpacity
              style={tw`py-3 bg-sky-700 rounded-full shadow-md`}
              onPress={handleSubmit}
            >
              <Text style={tw`text-xl font-bold text-center text-white`}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={tw`text-xl text-black font-bold text-center py-5`}>
            Or
          </Text>
          <View style={tw`flex-row justify-center gap-5`}>
            <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl`}>
              <Image
                source={require("../assets/icons/google.png")}
                style={tw`w-10 h-10`}
              />
            </TouchableOpacity>
            <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl`}>
              <Image
                source={require("../assets/icons/apple.png")}
                style={tw`w-10 h-10`}
              />
            </TouchableOpacity>
            <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl`}>
              <Image
                source={require("../assets/icons/facebook.png")}
                style={tw`w-10 h-10`}
              />
            </TouchableOpacity>
          </View>
          <View style={tw`flex-row justify-center my-7`}>
            <Text style={tw`text-black font-semibold`}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={tw`font-semibold text-sky-400 underline ml-2`}>
                {" "}
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
