import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

/**
 * Fetches a random recipe.
 *
 * @returns {Promise<Array>} An array of a random recipe object retrieved from the API.
 */
export const fetchRandomRecipe = () => retrieveRecipe('/random.php')

/**
 * Retrieves the recipe data for a specific meal by ID.
 *
 * @param {string} recipeId - The ID of the meal to retrieve recipe data for.
 *
 * @returns {Promise<Array>} An array of a specific recipe object retrieved from the API.
 */
export const getRecipe = (recipeId) => retrieveRecipe(`lookup.php?i=${recipeId}`)

/**
 * Retrieves the recipe data for a given query.
 *
 * @param {string} q - The query used to the find the name of the recipe to retrieve.
 *
 * @returns {Promise<Array>} - An array of recipe objects which the name matches the given query.
*/
export const searchRecipe = async (q) => retrieveRecipe(`search.php?s=${q}`)

/**
 * Retrieve a list of meals from the specified endpoint
 *
 * @param {string} endPoint - The endpoint to retrieve meals from
 *
 * @returns {Promise<Array>} - An array of meals retrieved from the endpoint
*/
const retrieveRecipe = async (endPoint) => {
  const { data } = await axios.get(`${API_URL}/${endPoint}`)
  return data.meals
}
