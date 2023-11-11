import {NumberOrNull, StringOrNull} from "@/types/base/BaseTypes";
import {IVideoGame} from "@/types/match";

export interface IPlayer {
  age: NumberOrNull
  birthday: StringOrNull
  first_name: StringOrNull
  id: number
  image_url: StringOrNull
  last_name: StringOrNull
  modified_at: Date
  name: string
  nationality: StringOrNull
  role: StringOrNull
  slug: StringOrNull
}

export interface IPlayerOpponentsMatch extends IPlayer {
  current_videogame: IVideoGame
}
