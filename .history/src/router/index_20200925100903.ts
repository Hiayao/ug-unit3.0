import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    redirect: ""
  },
  {
    path: '',
    component: Layout,
    children: [
      //首页
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: "首页"
        }
      },
      //常用hooks
      {
        path: '/hooks',
        name: 'Hooks',
        component: () => import('../views/hooks.vue'),
        meta: {
          title: "常用hooks"
        }
      },
      //图片预览
      {
        path: '/preview',
        name: 'Preview',
        component: () => import('../views/preview.vue'),
        meta: {
          title: "图片预览"
        }
      },
      //趋势
      {
        path: '/trend',
        name: 'Trend',
        component: () => import('../views/trend.vue'),
        meta: {
          title: "趋势"
        }
      },
      //底部工具栏
      {
        path: '/foottoolbar',
        name: 'Foottoolbar',
        component: () => import('../views/foottoolbar.vue'),
        meta: {
          title: "底部工具栏"
        }
      },
       //通知图标
       {
        path: '/noticeicon',
        name: 'Noticeicon',
        component: () => import('../views/noticeicon.vue'),
        meta: {
          title: "通知图标"
        }
      },
       //内嵌网页
       {
        path: '/iframe',
        name: 'Iframe',
        component: () => import('../views/iframe.vue'),
        meta: {
          title: "内嵌网页"
        }
      },
      //验证码按钮
      {
        path: '/countdown',
        name: 'Countdown',
        component: () => import('../views/countdown.vue'),
        meta: {
          title: "验证码按钮"
        }
      },
      //进度条拓展
      {
        path: '/progress',
        name: 'Progress',
        component: () => import('../views/progress.vue'),
        meta: {
          title: "进度条拓展"
        }
      },
      //生成二维码
      {
        path: '/qrcode',
        name: 'Qrcode',
        component: () => import('../views/qrcode.vue'),
        meta: {
          title: "生成二维码"
        }
      },
      //复制文本
      {
        path: '/copy',
        name: 'Copy',
        component: () => import('../views/copy.vue'),
        meta: {
          title: "复制文本"
        }
      },
       //生成水印
       {
        path: '/watermark',
        name: 'Watermark',
        component: () => import('../views/watermark.vue'),
        meta: {
          title: "生成水印"
        }
      },
      //可编辑文字
      {
        path: '/edittext',
        name: 'Edittext',
        component: () => import('../views/edittext.vue'),
        meta: {
          title: "可编辑文字"
        }
      },
    ]
  }
]

//决定路由模式
const isPro: boolean = process.env.NODE_ENV === 'production'
const router = createRouter({
  history: isPro ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  document.title = to.meta.title
  next()
})
export default router
