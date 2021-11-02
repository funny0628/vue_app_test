import Vue from 'vue'
import Vuex from 'vuex'
import file1 from './modules/file1.js'
import file2 from './modules/file2.js'

Vue.use(Vuex)
export const store = new Vuex.Store({
  modules:{
    file1,
    file2,
  }
  // state:{
  //   todos: [
  //     { id: 3,text:"我是true", done: true },
  //     { id: 4,text:"我是false", done: false }
  //   ],
  //   count:0,
  //   curIndex:0
  // },
  // getters:{

  //   getCurIndex: state => {
  //     return state.todos.filter(todo => todo.done)[0].text || '不知道是什么';
  //   },
  //   doneTodos: state => {
  //     return state.todos.filter(todo => todo.done)
  //   }
  // },
  // mutations:{
  //   setCurIndex(state,index){
  //     state.curIndex = index;
  //   },
  //   increment (state,n=1) {
  //     // 变更状态
  //     state.count+=n
  //   }
  // },
  // actions:{
  //   increment_l (context,n) {
  //     //请求新的数据,拿到需要的参数,再调用mutation 的函数传入需要的参数
  //     context.commit('increment',n)
  //   }
  // }
})