import axios from "axios";

const JAVA_BASE_URL = process.env.REACT_APP_BASE_URL

export default axios.create({
  baseURL: JAVA_BASE_URL,
  // baseURL: "http://localhost:8080",
  // headers: {"ngrok-skip-browser-warning": "true"}
})