import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CardItem = () => {
  return (
    <View
      style={{
        backgroundColor: "blue",
        height: 200,
        width: "70%",
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <View style={{ height: "70%", width: "100%", backgroundColor: "yellow" }}>
        <Image
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </View>

      <View
        style={{
          width: "100%",
          height: "30%",
          backgroundColor: "orange",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: "20", fontWeight: "bold" }}>item name</Text>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({});
