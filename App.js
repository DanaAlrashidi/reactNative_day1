import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthNavigation from "./src/context/navigation/profile/AuthNavigation";
import { useState } from "react";
import MyButton from "./src/components/MyButton";
import CardItem from "./src/components/CardItem";
import Home from "./src/screens/Home";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <QueryClientProvider client={new QueryClient()}>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
