<script setup>
import { RouterView } from 'vue-router'
import HeaderBar from './components/header/HeaderBar.vue'

</script>

<template>
  <header-bar />
  <main>
    <router-view />
  </main>
</template>
