import { View, Text, TextInput, Button, Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../Navigation";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/auth";
// import { text } from "express";

const Login = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Phone Number</Text>
      <TextInput
        placeholder="please enter your phone number:"
        onChange={(text) => {
          setUserInfo({ ...userInfo, phonNumber: text });
        }}
      />
      <Text>Password</Text>
      <TextInput
        placeholder="please enter your password:"
        onChange={(text) => {
          setUserInfo({ ...userInfo, password: text });
        }}
      />
      <Button title="Login" onPress={mutate} />
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
