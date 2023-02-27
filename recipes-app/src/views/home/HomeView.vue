<script setup></script>

<template>
  <main class="home">
    <div class="home-container container">
      <div class="hero">
        <div class="hero-content">
          <h2><span>Recipe</span> <span>App</span></h2>
          <div>The surpriseing recipe app for everyone</div>
        </div>
        <img alt="Vue logo" class="hero-image" src="@/assets/img/home-recipe.png" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main.home {
  padding-top: 4rem;
  background-color: #fbd791;

  .container {
    padding: 4rem 2rem;
  }
}
header.topbar {
  position: fixed;
  width: 100%;
}

.hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  justify-content: center;

  &-content {
    align-self: center;
  }
  &-image {
    justify-self: center;
    align-self: center;
    width: 100%;
  }
}
</style>
