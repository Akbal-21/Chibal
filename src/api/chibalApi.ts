import axios from "axios";

const chibalApi = axios.create({
  baseURL: "/api",
});

export default chibalApi;
