import api from '../index'

// 部门人员列表
const deptList = () => api.get('dept');
const deptListUser = () => api.get('dept/user');
const newProject = (obj) => api.put('project',{
  ...obj
})

export default {
  deptList,
  deptListUser,
  newProject
}