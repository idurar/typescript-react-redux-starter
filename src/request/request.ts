import axios from "axios";
import { API_BASE_URL } from "../config/serverApiConfig";

const errorHandler = {
  success: false,
  result: null,
  message: "Oops there is error",
};

const headersInstance = {};

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
});

const request = {
  create: async (entity: string, jsonData: any) => {
    axiosInstance.defaults.headers = {
      ...headersInstance,
    };

    try {
      const response = await axiosInstance.post(entity + "/create", jsonData);
      return response.data;
    } catch (error) {
      return errorHandler;
    }
  },
  read: async (entity: string, id: string) => {
    axiosInstance.defaults.headers = {
      ...headersInstance,
    };
    try {
      const response = await axiosInstance.get(entity + "/read/" + id);
      return response.data;
    } catch (error) {
      return errorHandler;
    }
  },
  update: async (entity: string, id: string, jsonData: any) => {
    axiosInstance.defaults.headers = {
      ...headersInstance,
    };
    try {
      const response = await axiosInstance.patch(
        entity + "/update/" + id,
        jsonData
      );
      return response.data;
    } catch (error) {
      return errorHandler;
    }
  },

  delete: async (entity: string, id: string) => {
    axiosInstance.defaults.headers = {
      ...headersInstance,
    };
    try {
      const response = await axiosInstance.delete(entity + "/delete/" + id);
      return response.data;
    } catch (error) {
      return errorHandler;
    }
  },

  filter: async (
    entity: string,
    option: { filter?: string; equal?: string }
  ) => {
    axiosInstance.defaults.headers = {
      ...headersInstance,
    };
    try {
      let filter = option.filter ? "filter=" + option.filter : "";
      let equal = option.equal ? "&equal=" + option.equal : "";
      let query = `?${filter}${equal}`;

      const response = await axiosInstance.get(entity + "/filter" + query);
      return response.data;
    } catch (error) {
      return errorHandler;
    }
  },

  search: async (
    entity: string,
    source: any,
    option: { fields?: string; question?: string }
  ) => {
    try {
      let query = "";
      if (option !== {}) {
        let fields = option.fields ? "fields=" + option.fields : "";
        let question = option.question ? "&q=" + option.question : "";
        query = `?${fields}${question}`;
      }
      // headersInstance.cancelToken = source.token;
      const response = await axiosInstance.get(entity + "/search" + query, {
        cancelToken: source.token,
      });

      return response.data;
    } catch (error) {
      return errorHandler;
    }
  },

  list: async (entity: string, option: { page?: number; items?: number }) => {
    try {
      let query = "";
      if (option !== {}) {
        let page = option.page ? "page=" + option.page : "";
        let items = option.items ? "&items=" + option.items : "";
        query = `?${page}${items}`;
      }

      const response = await axiosInstance.get(entity + "/list" + query);
      return response.data;
    } catch (error) {
      return errorHandler;
    }
  },

  post: async (entityUrl: string, jsonData: any) => {
    axiosInstance.defaults.headers = {
      ...headersInstance,
    };
    try {
      const response = await axiosInstance.post(entityUrl, jsonData);
      return response.data;
    } catch (error) {
      return errorHandler;
    }
  },
  get: async (entityUrl: string) => {
    axiosInstance.defaults.headers = {
      ...headersInstance,
    };
    try {
      const response = await axiosInstance.get(entityUrl);
      return response.data;
    } catch (error) {
      return errorHandler;
    }
  },
};
export default request;
