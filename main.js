import vue from 'vue'
import App from './App.vue'
import store from './store'
import "bootstrap/dist/css/bootstrap.css"

vue(App).mount('#app')

new vue({
    store,
})
