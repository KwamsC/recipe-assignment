<script setup>
import SearchBar from '../../components/search/SearchBar.vue'
</script>

<template>
  <section class="dashboard container">
    <div class="dashboard-content">
      <div>
        <h1>Search Your Recipe</h1>
      </div>
      <div>
        <search-bar />
      </div>
    </div>
  </section>
</template>

<style scoped>

.dashboard-content {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
</style>
