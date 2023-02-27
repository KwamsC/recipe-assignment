<template>
  <div>
    <div class="ui icon input">
      <input type="text" v-model="input" @keyup="search" placeholder="Search..." />
      <i class="search icon"></i>
    </div>
    <ul>
      <li v-for="recipe in recipes" :key="recipe">
        <router-link :to="{ path: `/recipe/${recipe.idMeal}` }">{{ recipe.strMeal }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import useSearchBar from './useSearchBar'

export default {
  setup() {
    const { input, recipes, search } = useSearchBar()

    return {
      input,
      recipes,
      search
    }
  }
}
</script>
