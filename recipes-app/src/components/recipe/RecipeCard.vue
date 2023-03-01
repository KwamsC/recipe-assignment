<script setup>
defineProps({
  recipe: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card">
    <img :src="recipe.strMealThumb" :alt="recipe.strMeal" class="recipe-image" />
    <div class="card-info">
      <h1>{{ recipe.strMeal }}</h1>
      <div>
        <router-link :to="{ path: `/recipe/${recipe.idMeal}` }" custom v-slot="{ navigate }">
          <button @click="navigate" type="button" role="link" class="btn">view recipe</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  width: 100%;
  max-width: 300px;
  position: relative;
  display: grid;
  grid-template-rows: 2fr 1fr;
  border-radius: 8px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.356);

  &-info {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.btn {
  padding: 0.8rem 1rem;
  text-transform: capitalize;
  border: 0;
  border-radius: 4rem;
  font-size: 15px;
  font-weight: 600;
  color: black;
  background: #fbd791;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.194);
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
  height: auto;
  border-radius: 5px 0 0 5px;
}
</style>
