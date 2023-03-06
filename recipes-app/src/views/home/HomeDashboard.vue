<script setup>
import SearchBar from '../../components/search/SearchBar.vue'
</script>

<template>
  <section class="dashboard container">
    <div class="dashboard-content">
      <div class="search-heading">
        <h1>Search Your Recipe</h1>
      </div>
      <div>
        <search-bar />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.search-heading{
  margin-bottom: 1rem
}
.dashboard-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
</style>
