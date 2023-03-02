import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { getRecipe } from '@services/recipe'

export default function useRecipesView() {
  const recipe = ref({})
  const route = useRoute()
  const router = useRouter()
  const ingredientsWithMeasures = ref([])

  onMounted(async () => {
    [recipe.value] = await getRecipe(route.params.id)
    ingredientsWithMeasures.value = [...mapIngredientsToMeasures(recipe.value)]
  })

  /**
   * This function allows the user to navigate back to the previous page in the browser's history
   *
   * @returns {Array<string>} An array of strings containing ingredients and their measures
  */
  const goBack = () => {
    router.go(-1)
  }

  /**
   * Maps the ingredients and measures of a recipe object and returns them as an array of strings
   *
   * @param {object} recipeObject - The recipe object containing ingredient and measure keys
   *
   * @returns {Array<string>} An array of strings containing ingredients and their measures
  */
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
    goBack,
    ingredientsWithMeasures,
  }
}
