import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

// Axios 인스턴스 생성
const axiosInstance = axios.create({
    baseURL: 'https://insurance-open-api.simg.kr/api/v1/prod',
    timeout: 5000,
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 요청 보내기 전에 수행할 로직
        // config에 대한 수정이 필요하면 여기서 수정
        config.headers['X-API-SECRET'] = 'B9452A8B-C7A4-4712-A823-77EB5BC647F2';
        return config;
    },
    (error) => {
        // 요청 에러 시 수행할 로직
        return Promise.reject(error);
    }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // 응답에 대한 로직
        // response에 대한 수정이 필요하면 여기서 수정
        return response.data;
    },
    (error) => {
        // 응답 에러 시 수행할 로직
        return Promise.reject(error);
    }
);

export default axiosInstance;
