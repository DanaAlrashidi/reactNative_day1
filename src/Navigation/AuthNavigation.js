import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from ".";
import Signup from "../screens/profile/Signup";
import Login from "../screens/profile/Login";

const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.AUTH_NAVIGATION.LOGIN}>
      <Stack.Screen
        name={ROUTES.AUTH_NAVIGATION.SIGNUP}
        component={Signup}
      ></Stack.Screen>
      <Stack.Screen
        name={ROUTES.AUTH_NAVIGATION.LOGIN}
        component={Login}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigation;
