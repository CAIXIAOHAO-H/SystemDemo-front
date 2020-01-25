import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/Home'
import User from '@/page/User'
import Login from '@/page/Login'
import Resourse from '@/page/Resourse'
import Role from '@/page/Role'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/systemsetting/user',
          name: 'User',
          component: User
        },
        {
          path: '/systemsetting/resourse',
          name: 'Resourse',
          component: Resourse
        },
        {
          path: '/systemsetting/role',
          name: 'Role',
          component: Role
        }
      ]
    }
  ]
})

router.beforeEach(function (to, from, next) {
  if (!localStorage.getItem('currentUserName')) {
    if (to.path !== '/login') {
      return next('/login')
    }
  }
  next()
})

export default router
