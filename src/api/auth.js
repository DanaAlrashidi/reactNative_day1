import { instance } from ".";
import { storeToken } from "./storage";

const login = async (userInfo) => {
  const res = await instance.get("/mini-project/api/auth/login", userInfo);

  const token = res.data.token;
  if (token) {
    storeToken(token);
  }
  return res.data;
};

export { login };
