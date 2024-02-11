import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getItemByID } from "../../api/items";

const CardDetail = () => {
  const rout = useRoute();
  const { _id, name } = rout.params;
  const { data } = useQuery({
    queryKey: ["items_"],
    queryFn: () => getItemByID(_id),
  });
  return (
    <View>
      <Text>{_id}</Text>
      <Text>{name}</Text>
    </View>
  );
};

export default CardDetail;

const styles = StyleSheet.create({});
