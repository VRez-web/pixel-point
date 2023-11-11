import {BooleanOrNull, DateOrNull, NumberOrNull, StringOrNull} from "@/types/base/BaseTypes";
import {ILeague} from "@/types/league";
import {IPlayer, IPlayerOpponentsMatch} from "@/types/player";
import {ITeam, ITeamWithPlayers} from "@/types/team";
import {ITournament} from "@/types/tournament";
import {ISerie} from "@/types/serie";

interface ILive {
  opens_at: StringOrNull
  supported: boolean
  url: StringOrNull
}

export interface IMapPick {
  id: number
  image_url: StringOrNull
  name: string
  picking_team_id: NumberOrNull
  videogame_versions: string[]
}

export const MATCH_GAME_TYPE = {
  "all_games_played": 'all games played',
  "best_of": 'best of',
  "custom": 'custom',
  "first_to": 'first_to',
  "ow_best_of": 'ow best of',
  "red_bull_home_ground": 'red bull home ground'
} as const

export type TGameMatchType = keyof typeof MATCH_GAME_TYPE

enum OpponentTypeEnum {
  "Player",
  "Team"
}

const MATCH_TYPE_OPPONENT = {
  "Player": 'player',
  "Team": 'team'
}

export type TMatchOpponent = keyof typeof MATCH_TYPE_OPPONENT

const MATCH_STATUS = {
  "canceled": '',
  "finished": '',
  "not_started": '',
  "postponed": '',
  "running": ''
} as const

export type TMatchStatus = keyof typeof MATCH_STATUS

export interface IPlayerOpponent {
  opponent: IPlayer
  type: OpponentTypeEnum
}

export interface ITeamOpponent {
  opponent: ITeam
  type: OpponentTypeEnum
}

export type TOpponent = IPlayerOpponent[] | ITeamOpponent[]

export interface IMatchTeamResult {
  team_id: number
  score: number
}

export interface IMatchPlayerResult {
  player_id: number
  score: number
}

export type TMatchResult = IMatchPlayerResult[] | IMatchTeamResult[]
export type TMatchResultItem = IMatchPlayerResult | IMatchTeamResult

interface IStream {
  embed_url: StringOrNull
  language: string
  main: boolean
  official: boolean
  raw_url: string
}

export interface IVideoGame {
  id: number
  name: string
  slug: string
}

export interface IVideoGameTitle {
  id: number
  name: string
  slug: string
  videogame_id: number
}

interface IVideoGameVersion {
  current: boolean
  name: string
}

interface IGame {
  begin_at: DateOrNull
  complete: boolean
  detailed_stats: boolean
  end_at: DateOrNull
  finished: boolean
  forfeit: boolean
  id: number
  match_id: number
  status: TMatchStatus
  winner: { id: number, type: TMatchOpponent }
  winner_type: TMatchOpponent
}

export interface IMatch {
  begin_at: DateOrNull
  detailed_stats: boolean
  draw: boolean
  end_at: DateOrNull
  forfeit: boolean
  game_advantage: NumberOrNull
  number_of_games: number
  match_type: TGameMatchType
  results: TMatchResult
  videogame: IVideoGame
  videogame_title: IVideoGameTitle
  videogame_version: IVideoGameVersion
  opponents: TOpponent
  winner_type: TMatchOpponent
  winner: IPlayerOpponent | ITeamOpponent
  winner_id: number
  games: IGame[]
  id: number
  league: ILeague
  league_id: number
  live: ILive
  modified_at: Date
  name: string
  original_scheduled_at: StringOrNull
  rescheduled: BooleanOrNull
  scheduled_at: DateOrNull
  serie: ISerie
  serie_id: number
  slug: StringOrNull
  status: TMatchStatus
  streams_list: IStream[]
  tournament: ITournament
  tournament_id: number
}

export type TMatchOpponents = ITeamWithPlayers[] | IPlayerOpponentsMatch[]

export interface IMatchOpponents {
  opponent_type: TMatchOpponent
  opponents: TMatchOpponents
}
