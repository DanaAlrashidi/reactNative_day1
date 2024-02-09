import { instance } from ".";

const getAllItems = async () => {
  const res = await instance.get("");
  return res.data;
};

export { getAllItems };
