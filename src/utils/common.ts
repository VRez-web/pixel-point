import {TMatchListItem} from "@/types/match/match";

export const formatDate = (date: string | Date, options = {}): string => {
  const formatDate = new Date(date)
  return new Intl.DateTimeFormat('ru-Ru', options).format(formatDate)
}

// temporary here
export const filterGames = (game: TMatchListItem): boolean => {
  const availableGames = [1, 3, 4, 14, 22, 24, 26, 29]
  return availableGames.includes(game.videogame.id)
}
