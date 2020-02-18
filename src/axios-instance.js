import axios from "axios";

const instance = endpoint =>
  axios.create({
    baseUrl: "http://localhost:5000/" + endpoint
  });

export default instance;
