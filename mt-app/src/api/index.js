import axios from '@/axios.js'
var api = {
  getSearchHotWord (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  getSearchList (params) {
    return axios.get('/api/meituan/header/search.json', params)
  },
  getMenuList (params) {
    return axios.get('/api/meituan/index/nav.json', params)
  },
  resultsByKeywords (params) {
    return axios.get('/api/meituan/index/resultsByKeywords.json', params)
  },
  getProductsList (params) {
    return axios.get('/api/meituan/list/goodsList.json', params)
  },
  getHotCity (params) {
    return axios.get('/api/meituan/city/hot.json', params)
  },
  getRecentCity (params) {
    return axios.get('/api/meituan/city/recents.json', params)
  },
  getProvinceList (params) {
    return axios.get('/api/meituan/city/province.json', params)
  },
  getCurPosition (params) {
    return axios.get('/api/meituan/city/getPosition.json', params)
  },
  getCityList (params) {
    return axios.get('/api/meituan/city/cityList.json', params)
  },
  login (params) {
    return axios.get('/api/meituan/login', params)
  },
  register (params) {
    return axios.get('/api/meituan/register', params)
  },
  detail (params) {
    return axios.get('/api/meituan/product/detail.json', params)
  },
  recommend (params) {
    return axios.get('/api/meituan/list/recommend.json', params)
  }
}
export default api
