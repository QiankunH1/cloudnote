import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


Vue.use(Router)
const components={
  layout:()=>import('@/views/layout'),
  index:()=>import('@/views/index/index'),
  writenote:()=>import('@/views/writenote/writenote'),
  register:()=>import('@/views/register/index'),
  note:()=>import('@/views/note/note'),
}


var router=new Router({
  routes: [  
    {
      path: '/',
      name: 'layout',
      component: components.layout,
      redirect:'/index',
      children:[   
        {
        path: 'index',
        name: 'index',
        meta:{
          title:'云笔记首页'
        },
        component: components.index
         },
        {
          path: 'writenote',
          name: 'writenote',
          component: components.writenote
        }, 
        {
          path: 'note/:id',
          name: 'note',
          component: components.note
        }, 
    ]
    },
    {
      path: '/register',
      name: 'register',
      component: components.register,
    }

   
  ]
})

router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router
