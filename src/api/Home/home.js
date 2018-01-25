import api from '../index'

// 项目列表
const projectList = () => api.get('project/head');

export default{
  projectList
}