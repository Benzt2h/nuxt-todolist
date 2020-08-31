// import Vuex from 'vuex'
// const store = () => {
//   return new Vuex.Store({
//     state: {
//       todoList: ['1', '2'],
//     },
//     mutations: {
//       addTodoList(state, todoList) {
//         state.todoList.push(todoList)
//       },
//       editTodoList(state, todoList) {
//         state.todoList = todoList
//       },
//     },
//     actions: {
//       setTodoList({ commit }, data) {
//         commit('addTodoList', data)
//       },
//       editTodoList({ commit }, data) {
//         commit('editTodoList', data)
//       },
//     },
//     modules: {},
//   })
// }
// export default store

export const state = () => ({
  todoList: ['1', '2'],
})

export const mutations = {
  addTodoList(state, todoList) {
    state.todoList.push(todoList)
  },
  editTodoList(state, todoList) {
    state.todoList = todoList
  },
}

export const actions = {
  setTodoList({ commit }, data) {
    commit('addTodoList', data)
  },
  editTodoList({ commit }, data) {
    commit('editTodoList', data)
  },
}
