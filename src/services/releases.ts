import {IGamesList} from "@/types/games/IGamesList";

const apiKey = import.meta.env.VITE_API_KEY

export const getReleases = async (filter: string): Promise<IGamesList> => {
  const res = await fetch(`api/releases/?api_key=${apiKey}&format=json&${filter}`, {
    method: 'GET',
  })
  return res.json()
}
