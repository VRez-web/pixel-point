import {ILeague, IMatch, IPlayer, ISerie, ITeam, ITournament, IVideoGame, IVideoGameTitle} from "@/types/match";
import {StringOrNull} from "@/types/base/BaseTypes";

type TTVideogame = IVideoGame & { current_version?: StringOrNull }
type TRoster = { players: IPlayer[], team: ITeam }

interface ILeagueNews extends ILeague {
  videogame: TTVideogame
  series: ISerie[]
}

interface ISeriaNews extends ISerie {
  league: ILeague
  tournaments: ITournament[]
  videogame: IVideoGame
  videogame_title: IVideoGameTitle | null
}

interface ITournamentNews extends ITournament {
  expected_roster: TRoster[]
  league: ILeague
  matches: Omit<IMatch, 'tournament'>[]
  serie: ISerie
  teams: ITeam[]
  videogame: IVideoGame
  videogame_title: IVideoGameTitle | null
}

interface IPlayerNews extends IPlayer {
  current_team: ITeam | null
  current_videogame: IVideoGame | null
}

interface ITeamNews extends ITeam {
  current_videogame: IVideoGame | null
  players: IPlayer []
}

export type TChangeType = 'creation' | 'deletion' | 'update'
export type TNewsType = 'league' | 'player' | 'serie' | 'team' | 'tournament'
export type TObjectNews = ILeagueNews | ISeriaNews | ITournamentNews | IPlayerNews | ITeamNews

export interface INews {
  change_type: TChangeType
  id: number
  modified_at: string
  object: TObjectNews
  type: TNewsType
}
