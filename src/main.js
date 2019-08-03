import Vue from 'vue'

import app from './app.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import '../lib//main.css'


import 'bootstrap'
require('bootstrap/dist/css/bootstrap.css')



import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'




var vm = new Vue({
    el:'#app',
    // data:{
    //     username:"123",
    //     password:""
    // },

    render:c => c(app),
    router
})