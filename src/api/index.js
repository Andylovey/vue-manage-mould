import axios from 'axios';

axios.defaults.baseURL = process.env.API_ROOT;

axios.defaults.timeout = 10000;

/**
 * 请求头拦截
 */
axios.interceptors.request.use((config) => {
    let token = localStorage.getItem('token');
    token && (config.headers.Authorization = token);
    return config
},(err) => {
    return Promise.reject(err)
})


axios.interceptors.response.use((res) => {
    if(res.status == 200) {
        return Promise.resolve(res)
    }
},(err) => {
    switch (err.response.status) {
         case 401:
            this.$Message.error('未登录');
            break;
    }
    return Promise.reject(err)
})