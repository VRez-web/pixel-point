import {ILeague, ISerie, ITournament, IVideoGame, IVideoGameTitle} from "@/types/match/match";
import {StringOrNull} from "@/types/base/BaseTypes";

type TVideogame = IVideoGame & { current_version?: StringOrNull }

interface ILeagueNews extends ILeague {
  videogame: TVideogame
  series: ISerie[]
}

interface ISeriaNews extends ISerie {
  league: ILeague
  tournaments: ITournament[]
  videogame: IVideoGame
  videogame_title: IVideoGameTitle | null
}

interface

export type TChangeType = 'creation' | 'deletion' | 'update'
export type TNewsType = 'league' | 'player' | 'serie' | 'team' | 'tournament'
export type TObject = ILeagueNews

export interface INews {
  change_type: TChangeType
  id: number
  modified_at: string
  object: TObject
  type: TNewsType
}
