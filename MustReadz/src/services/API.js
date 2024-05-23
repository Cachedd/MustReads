import axios from "axios";

export default (url = "https://example-data.draftbit.com/books") => {
  return axios.create({
    baseURL: url,
  });
};
