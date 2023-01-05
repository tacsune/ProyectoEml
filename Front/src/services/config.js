import axios from "axios";

axios.defaults.headers.get["ngrok-skip-browser-warning"] = "69420";

export default axios.create({
  baseURL: "https://dd50-45-235-40-132.ngrok.io/api/usuarios",
  headers: {
    post: {
      "ngrok-skip-browser-warning": "69420",
    },
  },
});
