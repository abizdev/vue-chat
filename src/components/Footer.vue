<template >
  <footer class="footer">
    <textarea placeholder="Написать сообщение..." rows="1" v-model="text" @keyup.enter="sendMsg"></textarea>
    <div class="send-mess">
      <img src="../../public/images/send.svg" alt="send" v-if="text.length" @click="sendMsg">
      <img src="../../public/images/photo.svg" alt="photo" v-else @click="toggleModal" >
    </div>
  </footer>
  
  <modal :id="id" v-show="modalActive" @modal-toggle="toggleModal" />
</template>

<script>
import Modal from '../components/Modal.vue'

export default {
  components: { Modal },
  props: ['id'],
  data() {
    return {
      text: '',
      modalActive: false
    }
  },
  methods: {
    toggleModal() {
      this.modalActive = !this.modalActive
    },
    sendMsg() {
      this.$store.dispatch('sendMsg', {
        id: this.id,
        text: this.text,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`
      })
      this.text = ''
    },
  },
}
</script>