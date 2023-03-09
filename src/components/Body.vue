<template >
  <section class="chat">
    <ul class="chat-list">
      <li class="chat-message get">
        <div class="chat-message__body">
          <span class="chat-message__time">12:21</span>
          <div class="chat-message__info">
            <img src="" alt="" v-if="false">
            <p>Привет. Как дела? Где ты изучаешь программирование?</p>
          </div>
        </div>
      </li>
      <li class="chat-message send">
        <div class="chat-message__body">
          <span class="chat-message__time">12:41</span>
          <div class="chat-message__info">
            <img src="" alt="" v-if="false">
            <p>Привет. Нормально. Как у тебя дела? Я учусь в учебном центре PROWEB</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  
}
</script>