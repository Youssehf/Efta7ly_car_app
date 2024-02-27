import { View, Text,TouchableOpacity } from "react-native";
import React from "react";
import { collection, addDoc } from "firebase/firestore";
import tw from "twrnc";

export default function VehicleScreen() {
  // firestore()
  // .collection('Users')
  // .add({
  //   name: 'Ada Lovelace',
  //   age: 30,
  // })
  // .then(() => {
  //   console.log('User added!');
  // });
  // const handleSubmit = async () => {
  //   try {
  //     const docRef = await addDoc(collection(db, "users"), {
  //       first: "Ada",
  //       last: "Lovelace",
  //       born: 1815,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>my Car!</Text>

      <TouchableOpacity
        style={tw`py-3 bg-sky-700 rounded-full shadow-md`}
        // onPress={handleSubmit}
      >
        <Text style={tw`text-xl font-bold text-center text-white`}>
          Update My Data
        </Text>
      </TouchableOpacity>
    </View>
  );
}
