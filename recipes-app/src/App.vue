<script setup>
import { RouterView } from 'vue-router'
import AppLogo from './components/app-logo/AppLogo.vue'
import NavBar from './components/navbar/NavBar.vue'
</script>

<template>
  <header class="topbar">
    <div class="topbar-container">
      <app-logo />
      <nav-bar />
    </div>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss" scoped>
header.topbar {
  position: absolute;
  width: 100%;
  background-color: var(--sand);
}

main {
  padding-top: 4rem;
}

.topbar-container {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;
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
