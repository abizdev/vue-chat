<template >
  <footer class="footer">
    <textarea placeholder="Написать сообщение..." rows="1" v-model="text"></textarea>
    <div class="send-mess">
      <img src="../../public/images/send.svg" alt="send" v-if="text.length" @click="sendMsg">
      <img src="../../public/images/photo.svg" alt="photo" v-else @click="toggleModal">
    </div>
  </footer>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: ['id'],
  data() {
    return {
      text: '',
      // message: {},
    }
  },
  methods: {
    ...mapActions(['toggleModal']),
    sendMsg() {      
      // console.log('footer comp', this.messages);
      this.$store.dispatch('sendMsg', {
        id: this.id,
        text: this.text,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`
      })
      this.text = ''
    }
    
  },
  computed: {
    ...mapState(['messages'])
  },
}
</script>