import { get, post } from './http';

/**
 * 测试接口
 */
export const getData = (data) => get('/api/v1.3/recommend/userFactRecommend',data)