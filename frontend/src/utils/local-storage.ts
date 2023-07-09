export const setItem = (key: string, item: object) => {
  localStorage.setItem(key, JSON.stringify(item))
}

export const getItem = (key: string) => {
  const item = localStorage.getItem(key)

  if(item) return JSON.parse(item)
  else return null
}

export const clearItem = (key: string) => {
  localStorage.removeItem(key)
}