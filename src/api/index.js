/**
 * Created by xiams on 2018/01/23.
 */
import axios from 'axios';
import { Message } from 'element-ui';

const authServerHost = '10.13.15.58:8000';
const token = window.localStorage.getItem('dmp_token');

const instance = axios.create({
  baseURL: `${location.protocol}//${authServerHost}/`,
  withCredentials: true,
  params: {
    // access_token: token,
  }
});
// instance.interceptors.response.use((response) => {
//   if (response.data.code !== 0 && response.data.code !== 20000 && response.data.code !== 401) {
//     Message({
//       showClose: true,
//       type: 'error',
//       message: response.data.message,
//     });
//   }
//   if (response.data.code === 401) {
//     window.localStorage.removeItem('dmp_token');
//     window.location.href = `${authServerHost}/oauth/authorize?client_id=client&response_type=code&redirect_uri=${location.protocol}//${location.host}`;
//   }
//   if (response.data.code === 20000) {
//     Message({
//       showClose: true,
//       type: 'error',
//       message: '操作失败',
//     });
//   }
//   return response;
// }, (error) => {
//   Message({
//     showClose: true,
//     type: 'error',
//     message: '网络错误',
//   });
//   return Promise.reject(error);
// });
export default instance;
