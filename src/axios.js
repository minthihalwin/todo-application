import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-todo-app-api-1bd67.cloudfunctions.net/api",
});

export default instance;
