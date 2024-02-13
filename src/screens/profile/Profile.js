import { Button, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import { removeToken } from "../../api/storage";

const Profile = () => {
  const [user, setUser] = useContext(UserContext);

  const logout = async () => {
    removeToken();
    setUser(false);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile</Text>
      <Button
        title="Logout"
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
