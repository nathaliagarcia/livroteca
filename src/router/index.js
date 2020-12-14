import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import firebase from "firebase/app";

Vue.use(VueRouter)

const router = new VueRouter ({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
  ],
})

router.beforeEach( (to, from, next) => {
  const user = firebase.auth().currentUser
  const requiresAuth = to.matched.some( record => record.meta.requiresAuth)

  if (requiresAuth && !user) next('login')
  else if (!requiresAuth && user) next('home')
  else next()
})

export default router
