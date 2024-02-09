import axios from "axios";

const BASE_URL = "https://github.com/DanaAlrashidi/reactNative_day1";
const instance = axios.create({
  baseURL: BASE_URL,
});
export { BASE_URL, instance };
