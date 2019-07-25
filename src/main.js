import Vue from 'vue'

import 'mint-ui/lib/style.css'

import app from './app.vue'

import Mint from 'mint-ui';

import '../lib/mui/css/mui.min.css'

Vue.use(Mint);

var vm = new Vue({
    el:'#app',
    render:c => c(app)
})