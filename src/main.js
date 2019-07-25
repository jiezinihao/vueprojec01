import Vue from 'vue'

import 'mint-ui/lib/style.css'

import app from './app.vue'

import Mint from 'mint-ui';

import '../lib/mui/css/mui.min.css'

import '../lib/mui/css/icons-extra.css'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import { Header , Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)


import VueRouter from 'vue-router'
Vue.use(VueRouter)

import '../lib/mui/fonts/mui-icons-extra.ttf'

//导入自己的router.js模块
import router from './router.js'

Vue.use(Mint);

var vm = new Vue({
    el:'#app',
    render:c => c(app),
    router
})