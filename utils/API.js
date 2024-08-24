import axios from "axios";

const API = axios.create({
  baseURL: "https://funadiq-wali-chat-backend-eosin.vercel.app/",
});

export default API;
