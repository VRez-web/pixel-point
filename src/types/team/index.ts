import {StringOrNull} from "@/types/base/BaseTypes";
import {IPlayer} from "@/types/player";
import {IVideoGame} from "@/types/videogame";

export interface ITeam {
  acronym: StringOrNull
  id: number
  image_url: StringOrNull
  location: StringOrNull
  modified_at: Date
  name: string
  slug: StringOrNull
}

export interface ITeamWithPlayers extends ITeam {
  players: IPlayer []
  current_videogame: IVideoGame
}
