import { get, post } from './http';

/**
 * 测试接口
 */
export const getData = () => get('/api/test')