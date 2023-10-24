
const token = import.meta.env.VITE_API_KEY
const baseUrl = import.meta.env.VITE_BASE_URL

export const getLiveGames = async (): Promise<unknown> => {
  const res = await fetch(`${baseUrl}matches/upcoming`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${token}`
    }
  })

  return res.json()
}
