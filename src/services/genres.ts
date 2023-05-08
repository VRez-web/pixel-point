import {IGenreList} from "@/types/genres/genre";

const apiKey = import.meta.env.VITE_API_KEY

export const getGenres = async (): Promise<IGenreList> => {
  const res = await fetch(`api/genres/?api_key=${apiKey}&format=json`, {
    method: 'GET',
  })

  return res.json()
}
