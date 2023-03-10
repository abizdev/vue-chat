<template>
  <div class="modal" :class="{active: modalActive}" @click="closeModal">
    <div class="modal-content" @click.stop>
      <h2>Отправить картинку</h2>
      <div class="modal__inp modal--img">
        <label class="modal__inp-label">URL</label>
        <input type="text" v-model="img">
      </div>
      <div class="modal__inp modal--text">
        <label class="modal__inp-label">Комментарий</label>
        <textarea rows="1" v-model="message"></textarea>
      </div>
      <div class="modal-btns">
        <button class="modal-del" @click="toggleModal">Отмена</button>
        <button class="modal-edit" @click="sendMessageAndImg">ОТПРАВИТЬ</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: ['id'],
  data() {
    return {
      img: '',
      message: '',
    }
  },
  computed: {
    ...mapState(['modalActive'])
  },
  methods: {
    ...mapActions(['toggleModal']),
    sendMessageAndImg() {
      // console.log('this id from props: ', this.id);
      if(this.img.length && this.message.length) {
        console.log(this.id, this.img, this.message);
        this.$store.dispatch('sendMessageAndImg', {
          id: this.id,
          img: this.img,
          text: this.message,
          time: `${new Date().getHours()}:${new Date().getMinutes()}`
        })
        this.img = ''
        this.message = ''
        this.toggleModal()
      }
    },
    closeModal() {
      this.img = '',
      this.message = ''
      this.toggleModal()
    }
  },
}
</script>