import api from '../index'

// 登录
const login = (userId, password) => api.post('session', {
  userId,
  password
});
export default {
  login
}