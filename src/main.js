import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import useCookies from 'vue-cookies'

createApp(App).use(store).use(router).use(useCookies).mount('#app')
