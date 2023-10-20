import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'v-calendar';

// import 'v-calendar/dist/style.css';
// @ts-ignore
import ('v-calendar/dist/style.css?used');

createApp(App).mount('#app')
