// axiosRequest.js
import axios from "axios";

export const setupAxiosInterceptors = () => {
  axios.interceptors.request.use(
    (config) => {
      console.log("Axios Request Intercepted:", config);
      // 在这里可以修改请求配置
      return config;
    },
    (error) => {
      console.error("Axios Request Interception Error:", error);
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      console.log("Axios Response Intercepted:", response);
      // 在这里可以处理响应数据
      return response;
    },
    (error) => {
      console.error("Axios Response Interception Error:", error);
      return Promise.reject(error);
    }
  );
};

export const axiosRequest = async (url: string, options = {}) => {
  setupAxiosInterceptors();
  try {
    const response = await axios({ url, ...options });
    return response.data;
  } catch (error) {
    throw error;
  }
};
