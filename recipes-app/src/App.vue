<script setup>
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import AppLogo from './components/AppLogo.vue'
import NavBar from './components/NavBar.vue'
// import SearchBar from './components/search/SearchBar.vue'
</script>

<template>
  <header class="topbar">
    <div class="topbar-container">
      <app-logo />
      <nav-bar />
    </div>
  </header>

  <router-view />
</template>

<style lang="scss" scoped>
header.topbar {
  position: fixed;
  width: 100%;
}

.topbar-container {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
}

.hero {
  display: flex;
  justify-content: center;
  &-image {
    max-width: 600px;
    min-width: 100px;
  }
}
</style>
