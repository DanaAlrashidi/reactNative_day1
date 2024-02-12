import * as SecureStore from "expo-secure-store";

const storeToken = async (token) => {
  await SecureStore.setItemAsync("token", token);
};

const getToken = async (token) => {
  await SecureStore.setItemAsync("token");
  return token;
};

const removeToken = async (token) => {
  await SecureStore.setItemAsync("token");
};
export { storeToken, getToken, removeToken };
