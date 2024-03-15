import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './style.css'
import App from './App.vue'

createApp(App).use(VueAxios, axios).mount('#app')
