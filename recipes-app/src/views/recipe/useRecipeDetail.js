import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { getRecipe } from '@services/recipe'

export default function useRecipesView() {
  const recipe = ref({})
  const route = useRoute()
  const ingredientsWithMeasures = ref([])

  onMounted(async () => {
    [recipe.value] = await getRecipe(route.params.id)
    ingredientsWithMeasures.value = [...mapIngredientsToMeasures(recipe.value)]
  })

  const mapIngredientsToMeasures = (recipeObject) => {
    const ingredients = Object.entries(recipeObject)
      .filter(([key]) => key.startsWith('strIngredient') && recipeObject[key].trim() !== '')
      .map(([, value]) => value)

    const measures = Object.entries(recipeObject)
      .filter(([key]) => key.startsWith('strMeasure') && recipeObject[key].trim() !== '')
      .map(([, value]) => value)

    return ingredients.map((ingredient, index) => (`${ingredient} (${measures[index]})`))
  }

  return {
    recipe,
    ingredientsWithMeasures,
  }
}
