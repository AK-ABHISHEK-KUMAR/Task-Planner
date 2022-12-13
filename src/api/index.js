import axios from "axios";

const URL = "https://task-planner-api.onrender.com";

export default axios.create({
  baseURL: URL,
});
