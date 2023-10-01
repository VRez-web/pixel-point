import {IGameDetailsResult, IGamesList} from "@/types/games/IGamesList";

const apiKey = import.meta.env.VITE_API_KEY

export const getGames = async (settings: string): Promise<IGamesList> => {
  const res = await fetch(`api/games/?api_key=${apiKey}&format=json${settings}`, {
    method: 'GET',
  })

  return res.json()
}

export const getGameDetails = async (id: string): Promise<IGameDetailsResult> => {
  const res = await fetch(`api/game/${id}/?api_key=${apiKey}&format=json`, {
    method: 'GET',
  })

  return res.json()
}
