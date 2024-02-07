import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from ".";

const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.AUTH_NAVIGATION.LOGIN}
    ></Stack.Navigator>
  );
};

export default AuthNavigation;
