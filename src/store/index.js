import { createStore } from "vuex";

const store = createStore({
  state: {
    messages: [],
  },
  mutations: {
    addMsg(state, payload) {
      state.messages.push(payload)
      localStorage.setItem('messages', JSON.stringify(state.messages))
    },
    loadFromLocal(state) {
      state.messages = localStorage.messages
                       ? JSON.parse(localStorage.messages)
                       : []
    },
    sendMessageAndImg(state, payload) {
      state.messages.push(payload)
      localStorage.setItem('messages', JSON.stringify(state.messages))
    }
  },
  actions: {
    sendMsg({commit}, obj) {
      commit('addMsg', obj)
    },
    loadFromLocal({commit}){
      commit('loadFromLocal')
    },
    sendMessageAndImg({commit}, obj) {
      commit('sendMessageAndImg', obj)
    }
  },
  getters: {},
})

export default store