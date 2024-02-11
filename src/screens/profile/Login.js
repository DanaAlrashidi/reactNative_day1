import { View, Text, TextInput, Button, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../Navigation";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Username</Text>
      <TextInput placeholder="please enter your username:" />
      <Text>Password</Text>
      <TextInput placeholder="please enter your password:" />
      <Button title="Login" />
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate(ROUTES.AUTH_NAVIGATION.SIGNUP);
          }}
        >
          <Text>Dont have an account? Signup</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
