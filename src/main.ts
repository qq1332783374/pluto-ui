import { createApp } from 'vue'
import {router} from "./router";
import App from './App.vue'
import './index.scss'
import '../packages/theme/pluto-ui.scss'
import '//at.alicdn.com/t/font_2142549_dpth86gk84.js'

createApp(App)
  .use(router)
  .mount('#app')
