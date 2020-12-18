import request from './index'

export const get = (url, data) => {
    return request.get(url, {params: data})
}

/**
 * post 可能需要使用 qs.stringify 或 JSON.stringify 将参数格式化
 * 根据 content-type 类型判断
 * content-type：application/x-www-form-urlencoded 需使用qs转为表单格式
 */
export const post = (url, data) => {
    return request.post(url, data)
}