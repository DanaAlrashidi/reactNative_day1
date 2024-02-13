import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/home/Home";
import CardDetail from "../../screens/home/CardDetail";
import ROUTES from "..";
import Test from "../../screens/home/Test";

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: "Dana" }}
        name={ROUTES.HOME_NAVIGATION.HOME}
        component={Home}
      />
      <Stack.Screen
        name={ROUTES.HOME_NAVIGATION.CARD_DETAIL}
        component={CardDetail}
      />

      <Stack.Screen name={ROUTES.HOME_NAVIGATION.TEST} component={Test} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
