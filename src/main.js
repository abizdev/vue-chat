import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import '../public/css/main.css'

createApp(App).use(store).mount('#app')
