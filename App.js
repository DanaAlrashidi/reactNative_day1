import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthNavigation from "./src/context/navigation/profile/AuthNavigation";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <QueryClientProvider client={new QueryClient()}>
      <NavigationContainer>
        <View
          style={{
            backgroundColor: "red",
            flex: 1,
          }}
        ></View>

        <Text>hi Ali</Text>
        <View
          style={{
            backgroundColor: "blue",
            flex: 0.3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            title="Click me"
            onPress={() => {
              setCounter(counter + 1);
            }}
            color={"white"}
          />
          <Text style={{ fontSize: 30 }}>{counter}</Text>
        </View>
        <AuthNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
