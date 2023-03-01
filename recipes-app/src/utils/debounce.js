/**
 * Debounces the given function for the specified delay time.
 *
 * @param {function} func - The function to be debounced.
 * @param {number} delay - Delay time in milliseconds before executing the debounced function.
 *
 * @returns {function} A debounced function that waits for the specified delay time.
*/
const debounce = (func, delay) => {
  let timeout
  return () => {
    clearTimeout(timeout)
    timeout = setTimeout(func, delay)
  }
}

export default debounce
