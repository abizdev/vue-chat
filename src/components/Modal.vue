<template>
  <div class="modal" :class="{active: modalAct}" @click="clearAndCloseModal">
    <div class="modal-content" @click.stop>
      <h2>Отправить картинку</h2>
      <div class="modal__inp modal--img">
        <label class="modal__inp-label">URL</label>
        <input type="text" v-model="img">
      </div>
      <div class="modal__inp modal--text">
        <label class="modal__inp-label">Комментарий</label>
        <textarea rows="1" v-model="message" @keyup.enter="sendMessageAndImg"></textarea>
      </div>
      <div class="modal-btns">
        <button class="modal-del" @click="clearAndCloseModal">Отмена</button>
        <button class="modal-edit" @click="sendMessageAndImg">ОТПРАВИТЬ</button>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  props: ['id', 'modalAct'],
  data() {
    return {
      img: '',
      message: '',
    }
  },
  methods: {
    sendMessageAndImg() {
      if(this.img.length && this.message.length) {
        console.log(this.id);
        this.$store.dispatch('sendMessageAndImg', {
          id: this.id,
          img: this.img,
          text: this.message,
          time: `${new Date().getHours()}:${new Date().getMinutes()}`
        })
        this.clearAndCloseModal()
      }
    },
    clearAndCloseModal() {
      this.img = ''
      this.message = ''
      this.$emit('modalToggle')
    }
  },
}
</script>