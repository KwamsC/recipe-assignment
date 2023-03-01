<script setup>
import RecipeCard from '@/components/recipe/RecipeCard.vue'
import useSearchBar from './useSearchBar'

const { input, recipes, search } = useSearchBar()
</script>

<template>
  <div class="ui icon input">
    <input
      type="text"
      aria-label="Search"
      v-model="input"
      @keyup="search"
      placeholder="Search recipes..."
    />
  </div>
  <ul v-if="recipes.length" class="search-list">
    <li v-for="recipe in recipes" :key="recipe">
      <recipe-card :recipe="recipe" />
    </li>
  </ul>
  <div v-else>
    <p>No recepies found</p>
  </div>
</template>

<style>
.search-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
</style>
