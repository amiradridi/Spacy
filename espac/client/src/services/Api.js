import axios from "axios";
import store from "./../store";
import router from "../router";

export default () => {
  const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  });

  api.interceptors.response.use(undefined, function(err) {
    if (err.response.status === 401) {
      // if you ever get an unauthorized, logout the user
      window.localStorage.clear();
      store.state.currentUser = undefined;
      router.replace({ name: "Home" });
      // redirect to login !
    } else {
      return Promise.reject(err);
    }
  });

  return api;
};
