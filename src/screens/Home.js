import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MyButton from "../components/MyButton";
import CardItem from "../components/CardItem";

const Home = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 80,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>hi Ali</Text>
      {/* <View
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
        </View> */}

      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <MyButton />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </ScrollView>

      {/* <AuthNavigation /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
