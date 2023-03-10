import { onMounted, ref } from 'vue'
import { fetchRandomRecipe } from '../../services/recipe'

export default function UseRandomRecipe() {
  const randomRecipe = ref({})

  onMounted(async () => {
    [randomRecipe.value] = await fetchRandomRecipe()
  })

  return {
    randomRecipe,
  }
}
