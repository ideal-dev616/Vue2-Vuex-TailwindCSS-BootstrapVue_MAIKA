import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [

    {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: '/',
          redirect: '/users'
        },
        {
          path: '/users',
          name: 'Users',
          component: () => import('./views/Users.vue'),
          meta: {
            rule: 'admin'
          }
        },
        {
          path: '/routines',
          name: 'Routines',
          component: () => import('./views/Routines.vue'),
          meta: {
            rule: 'admin'
          }
        },
        {
          path: '/devices',
          name: 'Devices',
          component: () => import('./views/Devices.vue'),
          meta: {
            rule: 'admin'
          }
        },
      ]
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ]
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
