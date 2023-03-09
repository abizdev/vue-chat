<template>
  <div class="modal" :class="{active: modalActive}" @click="toggleModal">
    <div class="modal-content" @click.stop>
      <h2>Отправить картинку</h2>
      <div class="modal__inp modal--img">
        <label class="modal__inp-label">URL</label>
        <input type="text">
      </div>
      <div class="modal__inp modal--text">
        <label class="modal__inp-label">Комментарий</label>
        <textarea rows="1"></textarea>
      </div>
      <div class="modal-btns">
        <button class="modal-del" @click="toggleModal">Отмена</button>
        <button class="modal-edit" @click="">ОТПРАВИТЬ</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['modalActive'])
  },
  methods: {
    ...mapActions(['toggleModal'])
  },
  data() {
    return {
      message: '',
      photo: '',
      time: null
    }
  },
}
</script>