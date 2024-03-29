import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import Login from "../screens/profile/Login";
import HomeNavigation from "./Home/HomeNavigation";
import AuthNavigation from "./Profile/AuthNavigation";
import ROUTES from ".";
import Profile from "../screens/profile/Profile";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={ROUTES.HOME_NAVIGATION.INDEX}
        component={HomeNavigation}
      />
      <Tab.Screen name={ROUTES.PROFILE_NAVIGATION.INDEX} component={Profile} />
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
