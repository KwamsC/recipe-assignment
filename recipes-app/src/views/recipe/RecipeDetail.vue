<script>
import useRecipeDetail from './useRecipeDetail'

export default {
  setup() {
    const { recipe } = useRecipeDetail()

    return {
      recipe
    }
  }
}
</script>

<template>
  <div v-if="recipe">
    {{ recipe }}
  </div>
  <div v-else>loading</div>
</template>
