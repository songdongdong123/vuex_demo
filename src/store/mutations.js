// 用来修改state，只能通过mutations来修改state中的值
import * as types from './mutation-types'

const matutaions = {
  [types.SET_TEST] (state, test) {
    test.age = 20
    state.test = test
  },
  [types.SET_DEMO] (state, index) {
    // actions提交的mutation
    state.demo = index
  },
  [types.SET_MOVE] (state, res) {
    state.move = res
  }
}

export default matutaions
