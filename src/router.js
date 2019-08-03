import VueRouter from 'vue-router'
//导入路由文件
import login from './main/login.vue'
import register from './main/register.vue'


var router = new VueRouter({
    routes:[
        { path: '/login',component:login},
        { path: '/register',component:register}
    ]
})


//吧路由对象暴露出去
export default router