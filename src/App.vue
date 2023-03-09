<template>
  <main class="main">
    <div class="user__item user__alex">
      <app-header :name="'Александр'" :src="'alex'" />
      <app-body />
      <app-footer :id="1" />
    </div>
    <div class="user__item user__jane">
      <app-header :name="'Евгений'" :src="'jane'" />
      <app-body />
      <app-footer :id="2" />
    </div>
  </main>
  <modal />
</template>

<script>
import AppHeader from './components/Header.vue'
import AppBody from './components/Body.vue'
import AppFooter from './components/Footer.vue'
import Modal from './components/Modal.vue'

export default {
  components: {
    AppHeader,
    AppBody,
    AppFooter,
    Modal,
  },
}
</script>