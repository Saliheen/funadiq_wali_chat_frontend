import axios from "axios";

const API = axios.create({
  baseURL: "https://funadiq-wali-chat-backend-eosin.vercel.app/",
  //   baseURL: "http://localhost:5000/",
});

export default API;
