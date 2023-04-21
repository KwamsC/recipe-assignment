<script setup>
import UseRandomRecipe from './UseRandomRecipe'
import RecipeCard from '../../components/recipe/RecipeCard.vue'

const { randomRecipe } = UseRandomRecipe()

</script>

<template>
  <div class="random-container">
    <h1>Random meal of the day</h1>
    <recipe-card :recipe="randomRecipe" />
  </div>
</template>

<style lang="scss" scoped>
.random-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;
  align-items: center;
}
</style>
