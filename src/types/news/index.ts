import {ILeague} from "@/types/league"
import {StringOrNull} from "@/types/base/BaseTypes";
import {IVideoGame, IVideoGameTitle} from "@/types/videogame";
import {IPlayer} from "@/types/player";
import {ITeam} from "@/types/team";
import {ISerie} from "@/types/serie";
import {ITournament} from "@/types/tournament";
import {IMatch} from "@/types/match";

type TTVideogame = IVideoGame & { current_version?: StringOrNull }
type TRoster = { players: IPlayer[], team: ITeam }

interface ILeagueNews extends ILeague {
  videogame: TTVideogame
  series: ISerie[]
}

interface ISerieNews extends ISerie {
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

export type NewsTypeChange = 'creation' | 'deletion' | 'update'
export type NewsType = 'league' | 'player' | 'serie' | 'team' | 'tournament'
export type NewsObjectType = ILeagueNews | ISerieNews | ITournamentNews | IPlayerNews | ITeamNews

export interface INews {
  change_type: NewsTypeChange
  id: number
  modified_at: string
  object: NewsObjectType
  type: NewsType
}
