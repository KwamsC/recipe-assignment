/**
   * Retrieves an array of values from an object whose keys start with a specified string.
   *
   * @param {Object} obj - The object to retrieve values from.
   * @param {string} keyString - The string that keys should start with.
   *
   * @returns {Array} An array of values from the object of keys starting with specified string.
  */
const getKeyPrefixValue = (obj, keyString) => Object.entries(obj)
  .filter(([key]) => key.startsWith(keyString) && !!obj[key])
  .map(([, value]) => value)

export default getKeyPrefixValue
