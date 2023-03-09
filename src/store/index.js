import { createStore } from "vuex";

const store = createStore({
  state: {
    messages: [],
    modalActive: false
  },
  mutations: {
    toggleModal(state) {
      state.modalActive = !state.modalActive
      console.log(state.modalActive);
    },
    addMsg(state, payload) {
      state.messages.push(payload)
      console.log(state.messages);
    }
  },
  actions: {
    toggleModal({commit}) {
      commit('toggleModal')
    },
    sendMsg({commit}, obj) {
      commit('addMsg', obj)
    }
  },
  getters: {},
})

export default store