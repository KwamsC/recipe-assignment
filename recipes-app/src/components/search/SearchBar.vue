<script setup>
import RecipeCard from '@/components/recipe/RecipeCard.vue'
import useSearchBar from './useSearchBar'

const { input, recipes, search } = useSearchBar()
</script>

<template>
  <div class="search-input-container">
    <input
      type="text"
      class=search-input
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
    <p class="cooking-question">What are you cooking today?</p>
  </div>
</template>

<style lang="scss">
.search {
  &-input-container{
    margin-bottom: 1rem;
  }

  &-input {
    border-radius: 1rem;
    padding: 0.5rem 0.8rem;
    border: 1px solid grey;
    min-width: 300px;
  }
}

.cooking-question {
  font-weight: 100;
  font-style: italic;
  font-size: 14px;
}

.search-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
</style>
