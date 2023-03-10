<template >
  <footer class="footer">
    <textarea placeholder="Написать сообщение..." rows="1" v-model="text"></textarea>
    <div class="send-mess">
      <img src="../../public/images/send.svg" alt="send" v-if="text.length" @click="sendMsg">
      <img src="../../public/images/photo.svg" alt="photo" v-else @click="toggleModal">
    </div>
  </footer>
  
  <modal :id="userId" />
</template>

<script>
import Modal from '../components/Modal.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: { Modal },
  props: ['id'],
  data() {
    return {
      userId: this.id,
      text: '',
    }
  },
  methods: {
    ...mapActions(['toggleModal']),
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