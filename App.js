import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthNavigation from "./src/Navigation/Profile/AuthNavigation";
import { useState } from "react";
import MyButton from "./src/components/MyButton";
import CardItem from "./src/components/CardItem";
import Home from "./src/screens/home/Home";
import Login from "./src/screens/profile/Login";
import HomeNavigation from "./src/Navigation/Home/HomeNavigation";
import MainNavigation from "./src/Navigation/MainNavigation";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <QueryClientProvider client={new QueryClient()}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
