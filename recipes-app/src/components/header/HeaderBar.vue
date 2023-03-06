<script setup>
import useHeaderBar from './useHeaderBar'
import AppLogo from '../app-logo/AppLogo.vue'

const { logout, noHeader } = useHeaderBar()
</script>

<template>
  <header v-if="noHeader" class="topbar">
    <div class="topbar-container">
      <app-logo />
      <nav class="navbar">
        <router-link to="/">Home</router-link>
        <button type="button" class="logout-btn" @click="logout">Sign out</button>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header.topbar {
  width: 100%;
  background-color: var(--sand);
}
.topbar-container {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;
}

.navbar {
  display: inline-block;
  text-align: end;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

.logout-btn {
  border: 0;
  color: var(--color-text);
  background-color: var(--white);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-weight: bold;
}

nav a {
  padding: 1rem;
  color: black;
}
</style>
