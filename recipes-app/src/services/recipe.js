import axios from "axios"

const baseUrl = 'https://www.themealdb.com/api/json/v1/1'

export const fetchRandomRecipe = async () => {
        try {
            const { data } = await axios
                .get(`${baseUrl}/random.php`)
            return data.meals
        } catch (error) {
            console.log(error)
        } 
    }

export const getRecipe = async (recipeId) => {
    const {id} = recipeId
    try {
        const { data } = await axios
            .get(`${baseUrl}/lookup.php?i=${id}`)
        return data.meals
    } catch (error) {
        console.log(error)
    } 
}

export const searchRecipe = async (q) => {
    try {
        const { data } = await axios
            .get(`${baseUrl}/search.php?s=${q}`)
        return data.meals
    } catch (error) {
        console.log(error)
    } 
}


// export default function useRecipesView(){
//     const RANDOM_RECIPE_URL = 'https://www.themealdb.com/api/json/v1/1/random.php'
//     const randomRecipe = ref({}) 

//     const fetchRandomRecipe = async () => {
//         try {
//             const { data } = await axios
//                 .get(RANDOM_RECIPE_URL)
//             return [randomRecipe.value] = data.meals
//         } catch (error) {
//             console.log(error)
//         } 

//     }

//     onMounted(() => {
//         fetchRandomRecipe()
//     })

//     return {
//         randomRecipe
//     }
// }