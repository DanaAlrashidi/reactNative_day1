import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
// import MyButton from "../components/MyButton";
import CardItem from "../../components/CardItem";
import { useQuery } from "@tanstack/react-query";
import { getAllItems } from "../../api/items";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["items"],
    queryFn: () => getAllItems(),
  });

  // const items = data?.map((item) => {
  //   return <CardItem image={item.image} name={item.name} />;
  // });

  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "blue",
          flex: 20,
          justifyContent: "center",
          alignItems: "center",
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
        {/* {items} */}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
