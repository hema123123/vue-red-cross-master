import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://nbhh.xlylai.com';
axios.defaults.headers['Content-Type'] = 'application/json; charset=UTF-8'

/**
 * 请求拦截
 */
axios.interceptors.request.use(config => {
  let token = sessionStorage.getItem('token')
  if (token) config.headers['token'] = token // 请求头带上token
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  config.data = qs.stringify(config.data)
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
axios.interceptors.response.use(res => {
  if (res.data.status == 200) return res.data.data
  return res
}, err => {
  return Promise.reject(err)
})


export default axios
