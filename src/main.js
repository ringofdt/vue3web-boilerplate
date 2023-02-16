import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from '@/App.vue'
import { stores } from '@/stores'
import { router }  from '@/router'


// Import our custom CSS
import '@/scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


const WebTitleTemplate = import.meta.env.VITE_APP_TITLE ?  import.meta.env.VITE_APP_TITLE : 'My Web'
import { createHead , useHead} from 'unhead'
const head = createHead()
useHead({
  titleTemplate: `%s | ${WebTitleTemplate}`,
})


const apiBaseURL = import.meta.env.VITE_API_BASE_URL ? import.meta.env.VITE_API_BASE_URL : './api'
import ApiService from '@/services/api.service'
ApiService.init(apiBaseURL)


const app = createApp(App)
app.use(stores)
app.use(router)
app.mount('#app')
