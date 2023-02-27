import { ref } from 'vue'
import { searchRecipe } from '@services/recipe'

export default function useSearchBar() {
  const input = ref('')
  const recipes = ref([])

  const search = async (e) => {
    if (e.target.value.length >= 1) {
      recipes.value = await searchRecipe(input.value)
    } else {
      recipes.value = []
    }
  }

  return {
    input,
    recipes,
    search,
  }
}
