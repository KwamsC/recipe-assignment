<script setup>
import HomeDashboard from './HomeDashboard.vue'
</script>

<template>
  <section class="home">
    <div class="hero container">
      <div class="hero-content">
        <div class="hero-text">
          <h1><span class="title title-black">Recipe</span> <span class="title title-white">App</span></h1>
          <div>The surprising recipe app</div>
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
  background-color: #fbd791;
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
  /* letter-spacing: 1px; */
  color: var(--white);
  font-weight: 500;
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
  &-white {
    color: white;
  }
  &-black {
    color: black;
  }
}

</style>
