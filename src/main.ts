import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './style.css'
import App from './App.vue'
import router from './utilities/router.ts'

createApp(App).use(router).use(VueAxios, axios).mount('#app')
