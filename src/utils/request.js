import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:8888/",
    timeout: 3000
});
request.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
request.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default request