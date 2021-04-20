// trims strings and adds dots (...) by specified number of words and max characters
export default function trimWords(string, numberOfWords, maxCharacters) {
  // split string into words by searching for every whitespace
  const expString = string.split(/\s+/, numberOfWords)
  const newString = expString.join(' ')

  if (newString.length > maxCharacters) {
    return string.substr(0, maxCharacters) + '...'
  } else if (newString.length >= string.length) {
    return string
  }

  return newString + '...'
}
