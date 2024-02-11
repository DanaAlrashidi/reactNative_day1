import { instance } from ".";

const getAllItems = async () => {
  const res = await instance.get("/mini-project/api/items");
  return res.data;
};
const getItemByID = async (_id) => {
  const res = await instance.get(`/mini-project/api/items/${_id}`);
  return res.data;
};
export { getAllItems, getItemByID };
