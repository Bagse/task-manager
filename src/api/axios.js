import axios from "axios";

const instance = axios.create({
  baseURL: "https://bd-crud-mongo.vercel.app/api",
  withCredentials: true,
});

export default instance;
