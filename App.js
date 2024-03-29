import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthNavigation from "./src/Navigation/Profile/AuthNavigation";
import { useEffect, useState } from "react";
import MyButton from "./src/components/MyButton";
import CardItem from "./src/components/CardItem";
import Home from "./src/screens/home/Home";
import Login from "./src/screens/profile/Login";
import HomeNavigation from "./src/Navigation/Home/HomeNavigation";
import MainNavigation from "./src/Navigation/MainNavigation";
import UserContext from "./src/context/UserContext";
import { getToken } from "./src/api/storage";

export default function App() {
  // const [counter, setCounter] = useState(0);
  const [user, setUser] = useState(false);

  const checkToken = async () => {
    const token = await getToken();
    if (token) {
      setUser(true);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <QueryClientProvider client={new QueryClient()}>
      <UserContext.Provider value={[user, setUser]}>
        <NavigationContainer>
          {/* {user ? <MainNavigation /> : <AuthNavigation />} */}
          {user ? <MainNavigation /> : <AuthNavigation />}
        </NavigationContainer>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}
