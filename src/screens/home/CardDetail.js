import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getItemByID } from "../../api/items";

const CardDetail = () => {
  const rout = useRoute();
  const { _id, name } = rout.params;
  const { data } = useQuery({
    queryKey: ["items", _id],
    queryFn: () => getItemByID(_id),
  });
  return (
    <View>
      <Text>{data?.category.name}</Text>
      <Text>{data?.name}</Text>
    </View>
  );
};

export default CardDetail;

const styles = StyleSheet.create({});
