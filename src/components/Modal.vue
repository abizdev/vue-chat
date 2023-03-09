<template>
  <div class="modal active">
    <div class="modal-content">
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
        <button class="modal-del">Отмена</button>
        <button class="modal-edit">ОТПРАВИТЬ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>