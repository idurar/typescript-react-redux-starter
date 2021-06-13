import axios from "axios";
import { API_BASE_URL } from "../config/serverApiConfig";

const errorHandler = {
  success: false,
  result: null,
  message: "Oops there is error",
};

const headersInstance = {
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
};

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    mode: "no-cors",
  },
});

type Ioption = {
  category: string;
  limit: number;
};

const request = {
  search: async (entity: string, { category, limit = 10 }: Ioption) => {
    try {
      let query = "";

      let categoryQuery = category ? "category_ids=" + category : "";
      let limitQuery = limit ? "&limit=" + limit : "";
      query = `?${categoryQuery}${limitQuery}`;

      const response = await axiosInstance.get(entity + "/search" + query);
      return { success: true, result: response.data };
    } catch (error) {
      return errorHandler;
    }
  },

  get: async (entity: string) => {
    try {
      const response = await axiosInstance.get(entity);
      return { success: true, result: response.data };
    } catch (error) {
      return errorHandler;
    }
  },
};
export default request;
