import axios from "axios";

// aparat
// api instance
const baseAparatApi = "https://www.aparat.com/etc/api/";
export const aparatApi = axios.create({
  baseURL: baseAparatApi,
});
