import axios from "axios";

const URL = process.env.WEB_URL || "http://localhost:3001"; 

export default axios.create({
  baseURL: URL,
});
