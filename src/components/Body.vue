<template >
  <section class="chat">
    <ul class="chat-list">
      <li 
        class="chat-message" 
        v-for="(item, key) in messages"
        :class="{
          get: item.id != id,
          send: item.id == id,
        }"
      >
        <div class="chat-message__body">
          <span class="chat-message__time">{{ item.time }}</span>
          <div class="chat-message__info">
            <!-- <img src="" alt="" v-if="false"> -->
            <p>{{ item.text }}</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    id: Number
  },
  computed: {
    ...mapState(['messages'])
  }  
}
</script>