import API from "./API.js";

export default {
  getBooks() {
    return API().get("?_page=2&_limit=100");
  },
};
