const apiKey = import.meta.env.VITE_API_KEY

export const getGenres = async (): Promise<any> => {
  const res = await fetch(`api/genres/?api_key=${apiKey}&format=json`, {
    method: 'GET',
  })
  return res.json()
}
