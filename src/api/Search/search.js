import api from '../index'

// 登录
const queryStr = (queryStr) => api.get('project/people', {
  params: {
    queryStr: queryStr
  }
})
export default {
  queryStr
}
