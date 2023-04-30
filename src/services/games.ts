const apiKey = import.meta.env.VITE_API_KEY

export const getGames = async (): Promise<any> => {
  const res = await fetch(`api/games/?api_key=${apiKey}&format=json`, {
    method: 'GET',
  })
  return res.json()
}
