import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import tw from "twrnc";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPresent, setErrorPresent] = useState("");

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        setErrorPresent(err.message);
      }
    }
  };
  const handleLoginInputs = () => {
    if (email === "" || password === "") {
      Alert.alert(
        "Missing Input",
        "Please make sure you Provided both Email and Password!"
      );
    } else if (errorPresent !== "") {
      Alert.alert("ERROR", `${errorPresent}`);
    }
  };
  return (
    <View style={tw`flex-1 bg-slate-800`}>
      <SafeAreaView style={tw`flex `}>
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
          <View style={tw`flex items-center justify-center`}>
            <Text style={tw`text-2xl font-bold mb-4`}>
              Log In To Your Account
            </Text>
          </View>
          <View style={tw`gap-3`}>
            <Text style={tw`text-black font-bold ml-3`}>Email Address</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl shadow-lg mb-3`}
              placeholder="email"
              value={email}
              onChangeText={(value) => setEmail(value)}
              autoCapitalize="none"
            />
            <Text style={tw`text-black font-bold ml-3`}>Password</Text>
            <TextInput
              style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl shadow-lg`}
              secureTextEntry
              placeholder="password"
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
            <TouchableOpacity style={tw`flex items-end`}>
              <Text style={tw`text-sky-400 font-bold mb-4 underline`}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleSubmit();
                handleLoginInputs();
                console.log('hello from login clicked');
              }}
              style={tw`py-3 bg-sky-700 rounded-full shadow-md`}
            >
              <Text style={tw`text-xl font-bold text-center text-white`}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={tw`text-xl text-black font-bold text-center py-5`}>
            Or
          </Text>
          <View style={tw`flex-row justify-center gap-3`}>
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
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={tw`font-semibold text-sky-400 ml-2 underline`}>
                {" "}
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
