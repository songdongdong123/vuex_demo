import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/header/header'
import Nav from '@/components/nav/nav'
import Footer from '@/components/footer/footer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active', // 路由激活时的默认样式
  routes: [
    {
      path: '/',
      redirect: '/header' // 这里是将默认打开的路由重定向到redirect的路由下面
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav
    }
  ]
})
