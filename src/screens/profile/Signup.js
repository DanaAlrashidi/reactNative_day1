import { View, Text, TextInput, Button, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../Navigation";

const Signup = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Full name</Text>
      <TextInput placeholder="please enter your Full name:" />
      <Text>Username</Text>
      <TextInput placeholder="please enter your username:" />
      <Text>Password</Text>
      <TextInput placeholder="please enter your password:" />
      <Button title="Submit" />
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate(ROUTES.AUTH_NAVIGATION.LOGIN);
          }}
        ></Pressable>
      </View>
    </View>
  );
};

export default Signup;
