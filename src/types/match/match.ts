import {BooleanOrNull, DateOrNull, NumberOrNull, StringOrNull} from "@/types/base/BaseTypes";
import {IPastMatch} from "@/types/match/pastMatch";
import {ILiveMatch} from "@/types/match/liveMatch";
import {IUpcomingMatch} from "@/types/match/upcomingMatch";

interface ILive {
  opens_at: StringOrNull
  supported: boolean
  url: StringOrNull
}

export interface ILeague {
  id: number
  image_url: StringOrNull
  modified_at: Date
  name: string
  slug: string
  url: StringOrNull
}

export interface IMapPick {
  id: number
  image_url: StringOrNull
  name: string
  picking_team_id: NumberOrNull
  videogame_versions: string[]
}

export const MATCH_TYPE = {
  "all_games_played": 'all games played',
  "best_of": 'best of',
  "custom": 'custom',
  "first_to": 'first_to',
  "ow_best_of": 'ow best of',
  "red_bull_home_ground": 'red bull home ground'
} as const

export type TMatchType = keyof typeof MATCH_TYPE

enum OpponentTypeEnum {
  "Player",
  "Team"
}

export enum WinnerTypeEnum {
  "Player" = 'player',
  "Team" = 'team'
}

enum StatusEnum {
  "canceled",
  "finished",
  "not_started",
  "postponed",
  "running"
}

// Ranking 'S' > 'A' > 'B' > 'C' > 'D' > 'Unranked'
enum TierEnum {
  "a",
  "b",
  "c",
  "d",
  "s",
  "unranked"
}

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

export interface ITeam {
  acronym: StringOrNull
  id: number
  image_url: StringOrNull
  location: StringOrNull
  modified_at: Date
  name: string
  slug: StringOrNull
}

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

export interface ISerie {
  begin_at: DateOrNull
  end_at: DateOrNull
  full_name: string
  id: number
  league_id: number
  modified_at: Date
  name: StringOrNull
  season: StringOrNull
  slug: string
  winner_id: number
  winner_type: WinnerTypeEnum
  year: NumberOrNull
}

interface IStream {
  embed_url: StringOrNull
  language: string
  main: boolean
  official: boolean
  raw_url: string
}

export interface ITournament {
  begin_at: DateOrNull
  detailed_stats: boolean
  end_at: DateOrNull
  has_bracket: boolean
  id: number
  league_id: number
  live_supported: boolean
  modified_at: Date
  name: string
  prizepool: StringOrNull
  serie_id: number
  slug: string
  tier: TierEnum
  winner_id: number
  winner_type: WinnerTypeEnum
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

// think about opponent type
interface IGame {
  begin_at: DateOrNull
  complete: boolean
  detailed_stats: boolean
  end_at: DateOrNull
  finished: boolean
  forfeit: boolean
  id: number
  match_id: number
  status: StatusEnum
  winner: { id: number, type: WinnerTypeEnum }
  winner_type: WinnerTypeEnum
}

export interface IMatch {
  begin_at: DateOrNull
  detailed_stats: boolean
  draw: boolean
  end_at: DateOrNull
  forfeit: boolean
  game_advantage: NumberOrNull
  number_of_games: number
  match_type: TMatchType
  results: TMatchResult
  videogame: IVideoGame
  videogame_title: IVideoGameTitle
  videogame_version: IVideoGameVersion
  opponents: TOpponent
  winner_type: WinnerTypeEnum
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
  status: StatusEnum
  streams_list: IStream[]
  tournament: ITournament
  tournament_id: number
}

export type TMatchList = IPastMatch[] | ILiveMatch[] | IUpcomingMatch []
export type TMatchListItem = IPastMatch | ILiveMatch | IUpcomingMatch
