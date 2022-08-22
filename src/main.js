import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"


import './style/main.css'

const app = createApp(App)

app.use(store);

app.mount('#app')
