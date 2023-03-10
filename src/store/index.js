import { createStore } from "vuex";

const store = createStore({
  state: {
    id: null,
    messages: [],
    modalActive: false
  },
  mutations: {
    toggleModal(state) {
      state.modalActive = !state.modalActive
      // console.log(state.modalActive);
    },
    addMsg(state, payload) {
      state.messages.push(payload)
      // console.log(state.messages);
      localStorage.setItem('messages', JSON.stringify(state.messages))
    },
    loadFromLocal(state) {
      state.messages = localStorage.messages
                       ? JSON.parse(localStorage.messages)
                       : []
    },
    sendMessageAndImg(state, payload) {
      console.log(payload);
      state.messages.push(payload)
      localStorage.setItem('messages', JSON.stringify(state.messages))
    }
  },
  actions: {
    toggleModal({commit}) {
      commit('toggleModal')
    },
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