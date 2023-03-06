import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getRecipe } from '@services/recipe'
import getKeyPrefixValue from '@utils/getKeyValue'

export default function useRecipesView() {
  const recipe = ref({})
  const route = useRoute()
  const router = useRouter()
  const ingredientsWithMeasures = ref([])
  const recipeTags = ref()

  onMounted(async () => {
    [recipe.value] = await getRecipe(route.params.id)
    ingredientsWithMeasures.value = [...mapIngredientsToMeasures(recipe.value)]
    recipeTags.value = recipe.value.strTags && recipe.value.strTags.split(',')
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
    const ingredients = getKeyPrefixValue(recipeObject, 'strIngredient')
    const measures = getKeyPrefixValue(recipeObject, 'strMeasure')

    return ingredients.map((ingredient, index) => (`${ingredient} (${measures[index]})`))
  }

  return {
    recipe,
    goBack,
    ingredientsWithMeasures,
    recipeTags,
  }
}
