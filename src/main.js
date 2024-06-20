import { createApp } from 'vue'
import './style.css'
import PrimeVue from "primevue/config";
import Aura from '@primevue/themes/aura';
import App from './App.vue'
import router from "../router/index.js";

import Button from "primevue/button"

const app = createApp(App);

app
    .use(PrimeVue, {
        theme: {
            preset: Aura
        }
    })
    .use(router)
    .component('Button', Button)
    .mount('#app')
