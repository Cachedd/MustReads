import API from "./API.js";

export default {
  getBooks() {
    return API().get("");
  },
  searchBooks(searchTerm) {
    return API().get(`?q=${searchTerm}`);
  },
  getClassics() {
    return API().get("?q=Classics");
  },
  getDystopia() {
    return API().get("?q=Dystopia");
  },
  getHistorical() {
    return API().get("?q=Historical");
  },
  getScienceFiction() {
    return API().get("?q=Science Fiction");
  },
};
