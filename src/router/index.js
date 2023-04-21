import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import LoginUser from '../views/login/LoginUser.vue'
import RecipeDetail from '../views/recipe/RecipeDetail.vue'
import RandomRecipe from '../views/random-recipe/RandomRecipe.vue'
import NotFound from '../views/404/NotFound.vue'
import { getCurrentUser } from '../firebaseConfig'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginUser,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: RecipeDetail,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/random-recipe',
      name: 'random-recipe',
      component: RandomRecipe,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      meta: {
        requiresAuth: true,
      },
    },
  ],
})

// eslint-disable-next-line consistent-return
router.beforeEach(async (to) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth && !await getCurrentUser()) {
    return '/login'
  }
})

export default router
