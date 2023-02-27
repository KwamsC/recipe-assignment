<template>
  <div class="about">
    <h1>Random meal of the day</h1>
    <div class="recipe-card">
      <img :src="randomRecipe.strMealThumb" :alt="randomRecipe.strMeal" class="recipe-image" />
      <div class="recipe-content">
        <h2 class="recipe-title">{{ randomRecipe.strMeal }}</h2>
        <router-link :to="{ path: `/recipe/${randomRecipe.idMeal}` }">View Recipe</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import UseRecipesView from './UseRecipesView'

export default {
  // `setup` is a special hook dedicated for composition API.
  setup() {
    const { randomRecipe } = UseRecipesView()

    // expose the state to the template
    return {
      randomRecipe,
    }
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.recipe-card {
  background-color: #fff;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  border-radius: 5px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.356);
}

.recipe-content {
  display: block;
}

.recipe-title {
  color: black;
}

.recipe-image {
  width: 300px;
  /* height: 300px; */
  border-radius: 5px 0 0 5px;
}
</style>
