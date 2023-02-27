import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { getRecipe } from '@services/recipe'

export default function useRecipesView() {
  const recipe = ref({})
  const route = useRoute()

  onMounted(async () => {
    ;[recipe.value] = await getRecipe({ id: route.params.id })
  })

  return {
    recipe
  }
}
