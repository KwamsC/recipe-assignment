<script setup>
import HomeDashboard from './HomeDashboard.vue'
</script>

<template>
  <section class="home">
    <div class="hero container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="title"><span class="title-black">Recipe</span> <span class="title-white">App</span></h1>
          <p>The surprising recipe app</p>
        </div>
        <router-link :to="{ name: 'random-recipe' }" custom v-slot="{ navigate }">
          <button @click="navigate" type="button" role="link" class="btn">Surprise recipe</button>
        </router-link>
      </div>
      <img alt="Vue logo" class="hero-image" src="@/assets/img/home-recipe.png" />
    </div>
    <home-dashboard />
  </section>
</template>

<style lang="scss" scoped>
.hero {
  display: grid;
  background-color: var(--sand);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  justify-content: center;

  &-content {
    align-self: center;
  }
  &-text {
    margin-bottom: 1.6rem;
  }
  &-image {
    justify-self: center;
    align-self: center;
    width: 100%;
  }
}

.btn {
  text-transform: capitalize;
  color: var(--white);
  font-weight: 600;
  padding: 13px 30px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.295);
  border: 0;
  border-radius: 5px;
  background-color: var(--black);
}
.container {
  padding: 4rem 2rem;
}

.title {
  text-shadow: 3px 5px 2px rgba(0, 0, 0, 0.102);
  margin-bottom: 0.5rem;
  &-white {
    color: var(--white);
  }
  &-black {
    color: var(--black);
  }
}

</style>
