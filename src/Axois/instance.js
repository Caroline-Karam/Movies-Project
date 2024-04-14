import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  params: {
    api_key: "6d9ea813a0c9d0d971fa8f548b959171",
  },
});

export default instance;
