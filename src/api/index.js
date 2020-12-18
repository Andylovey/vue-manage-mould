import axios from 'axios';

let request = axios.create({
    baseURL: process.env.API_ROOT,
    timeout: 10000
})

/**
 * 请求头拦截
 */
request.interceptors.request.use((config) => {
    let token = localStorage.getItem('token');
    token && (config.headers.Authorization = token);
    return config
},(err) => {
    return Promise.reject(err)
})


request.interceptors.response.use((res) => {
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

export default request