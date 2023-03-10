<template>
  <main class="main">
    <div class="user__item user__alex">
      <app-header :name="'Александр'" :src="'alex'" />
      <app-body :id="1"/>
      <app-footer :id="1" />
    </div>
    <div class="user__item user__jane">
      <app-header :name="'Евгений'" :src="'jane'" />
      <app-body :id="2"/>
      <app-footer :id="2" />
    </div>
  </main>
</template>

<script>
import AppHeader from './components/Header.vue'
import AppBody from './components/Body.vue'
import AppFooter from './components/Footer.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    AppHeader,
    AppBody,
    AppFooter,
  },
  methods: {
    ...mapActions(['loadFromLocal'])
  },
  created() {
    this.loadFromLocal()
  },
}
</script>