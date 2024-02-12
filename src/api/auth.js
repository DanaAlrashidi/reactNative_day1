import { instance } from ".";

const login = async (userInfo) => {
  const res = await instance.get("/mini-project/api/auth/login", userInfo);
  return res.data;
};

export { login };
