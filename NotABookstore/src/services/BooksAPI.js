import API from "./API.js";

export default {
  getBooks() {
    return API().get("?_limit=10");
  },
};
