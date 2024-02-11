import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import Login from "../screens/profile/Login";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen component={Home} />
      <Tab.Screen component={Login} />
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
