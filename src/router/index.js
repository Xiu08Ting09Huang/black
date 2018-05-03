import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabbar/home'
import Member from '@/components/tabbar/member'
import Cart from '@/components/tabbar/cart'
import Search from '@/components/tabbar/search'
import News from '@/components/news/list'
import NewsDetail from '@/components/news/detail'
import Goods from '@/components/goods/list'
import GoodDetail from '@/components/goods/detail'
import Pics from '@/components/pictures/list'
import PicDetail from '@/components/pictures/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component:Home
    },
    {
      path:'/member',
      component:Member
    },
    {
      path: '/cart',
      component:Cart
    },
    {
      path: '/search',
      component:Search
    },
    {
      path: '/goods',
      component:Goods
    },
    {
      path: '/goods/detail',
      component:GoodDetail
    },
    {
      path: '/news',
      component:News
    },
    {
      path: '/news/detail/:id',
      component:NewsDetail
    },
    {
      path: '/pictures',
      component:Pics
    },
    {
      path: '/pictures/detail',
      component:PicDetail
    },
  ],
  linkActiveClass:'mui-active'

})
