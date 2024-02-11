import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BASE_URL } from "../api/index";
const CardItem = ({ image, name, onPress = () => {} }) => {
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
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
      >
        <View
          style={{ height: "70%", width: "100%", backgroundColor: "yellow" }}
        >
          <Image
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            source={{
              uri: `${BASE_URL}/${image}`,
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
          <Text style={{ fontSize: "20", fontWeight: "bold" }}> {name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({});
