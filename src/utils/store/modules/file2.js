var state= {
  todos: [
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false }
  ],
  curIndex:0,
}
var getters= {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  }
}
var mutations= {
  setCurIndex (state,num) {
    // εζ΄ηΆζ
    state.curIndex += num
  }
}
var actions= {
  increment (context) {
    context.commit('increment')
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}