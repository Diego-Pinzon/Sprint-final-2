import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
      children: [
        {
          path: '/services/:slug',
          name: 'services',
          
          component: () => import( /* webpackChunkName: "Services" */'../views/Services.vue'),
          props: true,
      
          children: [
            {
              path: ':articleSlug',
              name: 'articleDetails',
              props: true,
              component: () => import( /* webpackChunkName: "Articles" */'../views/Articles.vue'),
            }
          ]
          
        },
      ]
  },
  {
    path: '/contacto',
    name: 'Contacto',

    component: () => import( /* webpackChunkName: "Contacto" */'../views/Contacto.vue'),
    props: true
  },
  {
    path: '/login',
    name: 'login',

    component: () => import( /* webpackChunkName: "Login" */'../views/Login.vue'),
    props: true,
    meta: {
      public: true
    }
  },
  {
      path: '/usuario',
      name: 'usuario',
      component: () => import( /* webpackChunkName: "Usuario" */'../components/Usuario.vue'),
      meta: {
          auth: true
      }
  },
  
  {
      path: "/categoria",
      name: "categoria",
      component: () => import( /* webpackChunkName: "Categoria" */'../components/Categoria.vue'),
      meta: {
          auth: true
      }

  },

  {
      path: "/articulo",
      name: "articulo",
      component: () => import( /* webpackChunkName: "Articulo" */'../components/Articulo.vue'),
      meta: {
          auth: true
      }

  },
  
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: "active-class",

  base: process.env.BASE_URL,

  scrollBehavior(to, from, savedPosition){
    if (savedPosition){
      return savedPosition;
    } else{
      const position = {};
      if (to.hash){
        position.selector = to.hash;
        if(document.querySelector(to.hash)){
          return position;
        }
        return false;
      }
    }
  },
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    // need to login
    if (!store.user) {
      next({
        name: 'login',
        query: {redirect: to.fullPath}
      });
    }else {
      next();
    }
  } else {
    next();
  }
});

export default router
