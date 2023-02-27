import axios from 'axios'

const baseUrl = 'https://www.themealdb.com/api/json/v1/1'

export const fetchRandomRecipe = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/random.php`)
    return data.meals
  } catch (error) {
    console.log(error)
    return null
  }
}

export const getRecipe = async (recipeId) => {
  const { id } = recipeId
  try {
    const { data } = await axios.get(`${baseUrl}/lookup.php?i=${id}`)
    return data.meals
  } catch (e) {
    console.error(e)
    return null
  }
}

export const searchRecipe = async (q) => {
  try {
    const { data } = await axios.get(`${baseUrl}/search.php?s=${q}`)
    return data.meals
  } catch (error) {
    console.log(error)
    return null
  }
}
