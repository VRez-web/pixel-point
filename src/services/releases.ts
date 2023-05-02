const apiKey = import.meta.env.VITE_API_KEY

export const getReleases = async (filter: string): Promise<any> => {
  const res = await fetch(`api/games/?api_key=${apiKey}&format=json&filter=${filter}`, {
    method: 'GET',
  })
  return res.json()
}
