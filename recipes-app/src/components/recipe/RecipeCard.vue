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
    <div class="container__text">
      <h1>{{ recipe.strMeal }}</h1>
      <router-link :to="{ path: `/recipe/${recipe.idMeal}` }" custom v-slot="{ navigate }">
        <button @click="navigate" type="button" role="link" class="btn">view recipe</button>
      </router-link>
    </div>
  </div>
</template>

<style>
.card {
  background-color: #fff;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-radius: 5px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.356);
}
.card img {
  width: 100%;
  height: auto;
  border-radius: 5px 0 0 5px;
}
.card .btn {
  position: absolute;
  bottom: -20px;
  right: -20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  background-color: #fc9400;
  color: #fff;
  padding: 22px 45px;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294);
}
.card .btn i {
  margin-left: 20px;
  font-size: 1.5rem;
}

.container__text {
  padding: 40px 40px 0;
}
.container__text h1 {
  font-weight: 400;
}

.container__text p {
  font-size: 0.9rem;
}
.container__text .container__text__timing {
  display: flex;
  margin: 20px 0 10px;
}
.container__text .container__text__timing .container__text__timing_time {
  margin-right: 40px;
}
.container__text .container__text__timing h2 {
  margin-bottom: 5px;
  font-size: 1rem;
  font-weight: 400;
  color: #818189;
}
.container__text .container__text__timing p {
  color: #351897;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
