import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const CardDetail = () => {
  const rout = useRoute();
  return (
    <View>
      <Text>CardDetail</Text>
    </View>
  );
};

export default CardDetail;

const styles = StyleSheet.create({});
