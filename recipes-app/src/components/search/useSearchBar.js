import { ref } from 'vue'
import { searchRecipe } from '@services/recipe'
import debounce from '@utils/debounce'

export default function useSearchBar() {
  const input = ref('')
  const recipes = ref([])

  /**
   * Searches for recipes based on input field, and returns the search results.
   *
   * @returns {Promise} A Promise resolving an array of recipe objects that match the search query,
   * or an empty array if no matching recipes were found.
   */
  const returnSearchResults = async () => {
    if (recipes.value && input.value.length >= 1) {
      recipes.value = await searchRecipe(input.value)
    } else {
      recipes.value = []
    }
  }

  const search = debounce(() => returnSearchResults(), 400)

  return {
    input,
    recipes,
    search,
  }
}
