import Config from '@/config/index.js'
import http from '@/utils/http.js'

function commonFunc(interfaceName, data, method = 'post') {
  return new Promise(resolve => {
    http({
      url: Config.URLDeploy + 'bus/' + 'apaas-deployment-service' + interfaceName,
      method: method,
      data: data
    }).then((res) => {
      resolve(res)
    }, (e) => {
      console.log('error', e)
    })
  })
}

// 获取模型列表
// 只返回审核通过的数据，接口不校验权限迹
export function aiModelModelList(data) {
  return commonFunc('/aiModel/v1/modelList', data, 'post')
}

// 获取模型列表
export function aiModelList(data) {
  return commonFunc('/aiModel/v1/list', data, 'post')
}

// 获取模型详情
export function aiModelDetail(data) {
  return commonFunc('/aiModel/v1/detail', data, 'post')
}

// 创建模型
export function aiModelAdd(data) {
  return commonFunc('/aiModel/v1/add', data, 'post')
}

// 编辑模型
export function aiModelEdit(data) {
  return commonFunc('/aiModel/v1/edit', data, 'post')
}

// 审核模型
export function aiModelApprove(data) {
  return commonFunc('/aiModel/v1/approve', data, 'post')
}

// 审核模型
export function aiModelDelete(data) {
  return commonFunc('/aiModel/v1/delete', data, 'post')
}

