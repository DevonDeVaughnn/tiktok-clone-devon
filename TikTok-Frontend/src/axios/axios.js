import axios from "axios";

const instance = axios.create({
  baseURL: "https://devon-tiktok-clone.herokuapp.com/",
});

export default instance;
