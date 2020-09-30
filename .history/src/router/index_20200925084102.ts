import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    redirect: ""
  },
  {
    path:'',
    component: Layout,
    children: [
      //首页
      {
        path:'',
        name:'Home',
        component:Home,
        meta:{
          title:"首页"
        }
      },
       //底部工具栏
       {
        path:'/foottoolbar',
        name:'Foottoolbar',
        component:() => import('../views/foottoolbar.vue'),
        meta:{
          title:"底部工具栏"
        }
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
