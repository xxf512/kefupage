import { getRequestsByRoot, serviceHocs, getMessageDecorator } from 'axios-service'
import { ElMessage } from 'element-plus'

const { requestOptsWrapper, setParamsDecorate } = serviceHocs

const {
  get: baseGet, post: basePost, postXForm
} = getRequestsByRoot({ root: '/' })

const responseKeys = { dataKey: 'data', msgKey: 'msg', codeKey: 'code', successCode: 200 }

const get = requestOptsWrapper(baseGet, responseKeys)
const post = requestOptsWrapper(basePost, responseKeys)
const postForm = requestOptsWrapper(postXForm, responseKeys)

const messageDecorator = getMessageDecorator({
  success: msg => ElMessage({
    type: 'success',
    message: msg
  }),
  error: msg => ElMessage({
    type: 'error',
    message: msg
  })
})

class Apis {
  /**
   * 获取app信息
   */
  @messageDecorator({ errorMsg: (error) => (error && error.msg) || '网络出错' })
  getAppList = get('/chat/chat/my-app-list')
}

export default new Apis()