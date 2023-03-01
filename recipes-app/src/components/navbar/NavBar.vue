<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <!-- <router-link to="/recipes">Recipes</router-link> -->
  </nav>
</template>

<style lang="scss" scoped>
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a {
  padding: 1rem;
}
</style>
