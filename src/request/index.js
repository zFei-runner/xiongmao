import axios from 'axios'
import { Indicator } from 'mint-ui'
const ajax = axios.create()
ajax.interceptors.request.use(config => {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    return config
})
ajax.interceptors.response.use(resp => {
    Indicator.close()
    if (resp.status === 200) {
      return resp.data
    } else {
      return '网络错误'
    }
})
//请求导航栏数据
export const getNav = () => ajax.get('/api/tabs?sa=')
//轮播图
export const getBanner = () => ajax.get('/api/tab/1?start=0')
//导航栏详细数据
export const getHot = id => ajax.get(`/api/tab/${id}?start=0`)
//获取详情页接口数据
export const getDetail = id => ajax.get(`/api/detail?id=${id}&normal=1&sa=`)