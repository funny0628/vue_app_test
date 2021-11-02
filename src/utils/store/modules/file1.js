var state= {
  todos: [
    { id: 3,text:"我是true", done: true },
    { id: 4,text:"我是false", done: false }
  ],
  count:0,
  curIndex:0,
}
var getters= {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  }
}
var mutations= {
  setCurIndex(state,num){
    state.curIndex += num;
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