// asynchronously fetches from multiple urls while maintaining data structure
export const getAPI = async (urls, debug = false) => {
  try {
    if (!urls) return

    // gets all names from object entries e.g. ['hero', 'hero']
    const entries = Object.entries(urls)

    const data = await Promise.all(
      entries.map((url) =>
        fetch(`${process.env.API_URL}/${url[1]}`).then((res) => res.json())
      )
    ).then((results) => {
      const nameToResult = {}

      // for each entry assign values to a named object
      for (let i = 0; i < results.length; i++) {
        const name = entries[i][0]
        nameToResult[name] = results[i]
      }

      return nameToResult
    })

    if (debug) {
      for (let i of data) {
        console.log(data[i])
      }
    }

    return { data, success: true }
  } catch (error) {
    console.log(error)

    return { error, success: false }
  }
}
