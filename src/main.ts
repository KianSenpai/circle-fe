import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './style.css'
import App from './App.vue'
import router from './utilities/router.ts'
import { createPinia } from 'pinia'

createApp(App).use(router).use(createPinia()).use(VueAxios, axios).mount('#app')
