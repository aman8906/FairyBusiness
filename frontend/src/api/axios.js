import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  withCredentials: true,
  timeout: 30000,
  // No default Content-Type header here on purpose.
  // Axios sets the right one automatically per request:
  //   - plain object body  -> "application/json"
  //   - FormData body      -> "multipart/form-data; boundary=..."
  // Forcing "application/json" globally (as before) overrode the
  // multipart boundary on file-upload requests, which is why
  // req.file was always undefined on the backend even though the
  // text fields (name, email, etc.) came through fine.
});

export default api;