import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
// import MyButton from "../components/MyButton";
import CardItem from "../../components/CardItem";
import { useQuery } from "@tanstack/react-query";
import { getAllItems } from "../../api/items";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../Navigation";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["items"],
    queryFn: () => getAllItems(),
  });
  const navigation = useNavigation();

  const items = data?.map((item) => {
    return (
      <CardItem
        image={item.image}
        name={item.name}
        onPress={() => {
          navigation.navigate(ROUTES.HOME_NAVIGATION.CARD_DETAIL, {
            _id: item._id,
            name: item.name,
          });
        }}
      />
    );
  });

  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Button
        title="Go signup"
        onPress={() => {
          navigation.navigate(ROUTES.AUTH_NAVIGATION.INDEX, {
            screen: ROUTES.AUTH_NAVIGATION.SIGNUP,
          });
        }}
      />

      <Button
        title="Go to test"
        onPress={() => {
          navigation.navigate(ROUTES.HOME_NAVIGATION.TEST, {
            screen: ROUTES.AUTH_NAVIGATION.SIGNUP,
          });
        }}
      />

      <View
        style={{
          backgroundColor: "blue",
          flex: 20,
        }}
      >
        <ScrollView
          horizontal
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            gap: 10,
          }}
        >
          <View
            style={{ width: 50, height: 30, backgroundColor: "white" }}
          ></View>
          <View
            style={{ width: 50, height: 30, backgroundColor: "white" }}
          ></View>
          <View
            style={{ width: 50, height: 30, backgroundColor: "white" }}
          ></View>
          <View
            style={{ width: 50, height: 30, backgroundColor: "white" }}
          ></View>
          <View
            style={{ width: 50, height: 30, backgroundColor: "white" }}
          ></View>
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: "green",
          flex: 80,
          //   justifyContent: "center",
          //   alignItems: "center",
        }}
      ></View>
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        {items}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
