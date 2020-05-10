import Api from "../services/Api";

export default {
  ajoutEspace(credentials) {
    return Api().post("/post/register", credentials);
  },
  test() {
    return Api().get("/post/test");
  }
};
