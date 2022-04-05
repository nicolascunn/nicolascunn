import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import './assets/main.css'

const app = createApp(App)
app.use(routes)
app.mount("#app")  
