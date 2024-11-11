import { createApp } from 'vue'
import './style.css'
import components from './components/UI'
import App from './App.vue'

createApp(App).mount('#app')


components.forEach(component => {
    app.component(component.name, component)
})