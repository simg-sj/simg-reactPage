import Axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_X_API_SECRET;
export const axios = Axios.create({
    baseURL: baseUrl,
    validateStatus: () =>  false,
    headers : {
        "Content-Type" : 'application/x-www-form-urlencoded',
        "X-API-SECRET" : apiKey
    },
});

axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)