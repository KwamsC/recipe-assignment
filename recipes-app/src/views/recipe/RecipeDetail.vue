<script setup>
import useRecipeDetail from './useRecipeDetail'

const { recipe, ingredientsWithMeasures, goBack } = useRecipeDetail()

</script>

<template>
  <section class="recipe-container">
    <div class="card-container" v-if="recipe">
      <div class="back-btn">
        <button class="btn" @click="goBack" type="button">go back</button>
      </div>
      <div class="card">
        <img :src="recipe.strMealThumb" :alt="recipe.strMeal" class="card-media" />
        <div class="card-body">
          <h2 class="card-title">{{recipe.strMeal}}</h2>
          <div>
            {{ recipe.strTags }}
          </div>
          <div v-if="recipe.strYoutube">
            <a :href="recipe.strYoutube" target="_blank" rel="noopener noreferrer"> Play instruction video</a>
          </div>
        </div>
        <div class="ingredients">
          <h3 class="heading">Ingredients</h3>
          <ul>
            <li v-for="(ingredient, index) in ingredientsWithMeasures" :key="index">
              - {{ ingredient }}
            </li>
          </ul>
        </div>
        <div class="instructions">
          <h3 class="heading">Instructions</h3>
          <p class="instruction-text"> {{ recipe.strInstructions }}</p>
        </div>

      </div>
      <div class="card-shadow" />
    </div>
    <div v-else>loading</div>
  </section>
</template>

<style lang="scss" scoped>
.recipe-container {
  background-color: #F9F7F1;
  min-height: 100vh;
}
.card-container {
  margin: 3rem auto 0;
  max-width: 1000px;
}

.back-btn {
  text-align: end;
  padding: 1rem;
}

.heading{
  margin: 1rem 0;
  font-weight: 800;
}

.btn {
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  border: 0;
  border-radius: 1rem;
  color: white;
  background: black;
}

.card {
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  padding: 1rem;
  position: relative;
  box-shadow: 0 0 5px rgba(75, 75, 75, .07);
  z-index: 1;

  &-media {
    width: 100%;
    height: 100%;
  }

  &-title {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 1rem
  }
}

.instruction-text {
  white-space: pre-wrap;
}
</style>
