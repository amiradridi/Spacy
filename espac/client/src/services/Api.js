import axios from "axios";

export default () => {
  const api = axios.create({
    baseURL: "http://localhost:3000",

  });


  return api;
};
