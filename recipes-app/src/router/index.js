import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: () => import('../views/recipe/RecipeDetail.vue'),
    },
    {
      path: '/random-recipe',
      name: 'random-recipe',
      component: () => import('../views/random-recipe/RandomRecipe.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404Page.vue'),
    },
  ],
})

export default router
