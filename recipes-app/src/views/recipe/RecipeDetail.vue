<script setup>
import useRecipeDetail from './useRecipeDetail'

const { recipe, ingredientsWithMeasures } = useRecipeDetail()

</script>

<template>
  <section class="recipe" v-if="recipe">
    <div class="top-grid">
      <div class="recipe-img">
        <img :src="recipe.strMealThumb" :alt="recipe.strMeal" class="recipe-image" />
      </div>
      <div class="recipe-">
        <h1>{{ recipe.strMeal }}</h1>
      </div>
    </div>
    <div class="ingredients">
      <ul>
        <li v-for="(ingredient, index) in ingredientsWithMeasures" :key="index">
          {{ ingredient }}
        </li>
      </ul>
    </div>
    <div>
      {{ recipe.strInstructions }}
    </div>
  </section>
  <div v-else>loading</div>
</template>

<style lang="scss" scoped>
.recipe {
  background-color: #F9F7F1;
}
.top-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.container {
  padding: 2rem 0;
}
</style>
