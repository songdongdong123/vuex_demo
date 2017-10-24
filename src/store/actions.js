// 所有的异步操作
import axios from 'axios'
// https://api.douban.com/v2/movie/in_theaters
import * as types from './mutation-types'
// const config = {
//   withCredentials: false
// }
export const demo = function ({commit, state}, index) {
  commit(types.SET_DEMO, index)
  axios.get('https://bird.ioliu.cn/weather?city=深圳').then(res => {
    // console.log(res)
    commit(types.SET_MOVE, res)
  })
}
