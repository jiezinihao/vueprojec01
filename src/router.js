import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SeachContainer from './components/tabbar/SearContainer.vue'

var router = new VueRouter({
    routes:[
        { path:'/home',component: HomeContainer },
        { path:'/member',component: MemberContainer },
        { path:'/shopcar',component: ShopcarContainer },
        { path:'/seach',component: SeachContainer }
    ],
    linkActiveClass: 'mui-active'
})


//吧路由对象暴露出去
export default router