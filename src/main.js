import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { stores } from '@/stores'

// Import our custom CSS
import '@/scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


import { createHead , useHead} from 'unhead'
const head = createHead()
useHead({
  titleTemplate: '%s | My Site',
})



// import ApiService from '@/services/api.service'
// ApiService.init(import.meta.env.VITE_API_BASE_URL)

createApp(App)
.use(
    router,
    stores,
    )
.mount('#app');
