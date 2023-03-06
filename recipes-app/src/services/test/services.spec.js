import {
  describe, it, expect, vi,
} from 'vitest'
import { fetchRandomRecipe, getRecipe, searchRecipe } from '@services/recipe'
import axios from 'axios'

vi.mock('axios')

describe('fetchRandomRecipe', () => {
  it('should fetch a random recipe', async () => {
    const data = [{ idMeal: '52809', strMeal: 'Recheado Masala Fish' }]
    axios.get.mockResolvedValue({ data: { meals: data } })
    const result = await fetchRandomRecipe()
    expect(result).toEqual(data)
  })

  it('should throw an error if the API call fails', async () => {
    axios.get.mockRejectedValue(new Error('API call failed'))
    await expect(fetchRandomRecipe()).rejects.toThrow('API call failed')
  })
})

describe('getRecipe', () => {
  it('should retrieve the recipe for a specific meal by ID', async () => {
    const data = [{ idMeal: '12345', strMeal: 'Spaghetti' }]
    axios.get.mockResolvedValue({ data: { meals: data } })
    const result = await getRecipe('12345')
    expect(result).toEqual(data)
  })

  it('should throw an error if the API call fails', async () => {
    axios.get.mockRejectedValue(new Error('API call failed'))
    await expect(getRecipe('12345')).rejects.toThrow('API call failed')
  })
})

describe('searchRecipe', () => {
  it('should retrieve a list of recipes that match the given query', async () => {
    const data = [{ idMeal: '52809', strMeal: 'Recheado Masala Fish' }, { idMeal: '52908', strMeal: 'Ratatouille' }]
    axios.get.mockResolvedValue({ data: { meals: data } })
    const result = await searchRecipe('pasta')
    expect(result).toEqual(data)
  })

  it('should throw an error if the API call fails', async () => {
    axios.get.mockRejectedValue(new Error('API call failed'))
    await expect(searchRecipe('pasta')).rejects.toThrow('API call failed')
  })
})
