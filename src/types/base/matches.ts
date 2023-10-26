import {BooleanOrNull, DateOrNull, NumberOrNull, StringOrNull} from "@/types/base/BaseTypes";

interface ILive {
  opens_at: StringOrNull
  supported: boolean
  url: StringOrNull
}

interface ILeague {
  id: number
  image_url: StringOrNull
  modified_at: Date
  name: string
  slug: string
  url: StringOrNull
}

interface IMapPick {
  id: number
  image_url: StringOrNull
  name: string
  picking_team_id: NumberOrNull
  videogame_versions: string[]
}

export enum MatchTypeEnum {
  "all_games_played" = 'all games played',
  "best_of" = 'best of',
  "custom" = 'custom',
  "first_to" = 'first_to',
  "ow_best_of" = 'ow best of',
  "red_bull_home_ground" = 'red bull home ground'
}

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

export interface IPlayerOpponent {
  opponent: {
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
  type: OpponentTypeEnum
}

export interface ITeamOpponent {
  opponent: {
    acronym: StringOrNull
    id: number
    image_url: StringOrNull
    location: StringOrNull
    modified_at: Date
    name: string
    slug: StringOrNull
  }
  type: OpponentTypeEnum
}

export interface IMatchTeamResult {
  team_id: number
  score: number
}

export interface IMatchPlayerResult {
  player_id: number
  score: number
}

interface ISerie {
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

interface IStreamsList {
  embed_url: StringOrNull
  language: string
  main: boolean
  official: boolean
  raw_url: string
}

interface ITournament {
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

interface IVideoGame {
  id: number
  name: string
  slug: string
}

interface IVideoGameTitle {
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
interface IMatch {
  begin_at: DateOrNull
  complete: boolean
  detailed_stats: boolean
  end_at: DateOrNull
  finished: boolean
  forfeit: boolean
  id: number
  league: ILeague
  league_id: number
  live: ILive
  map_picks: IMapPick[] | null
  modified_at: Date
  name: string
  original_scheduled_at: StringOrNull
  rescheduled: BooleanOrNull
  scheduled_at: DateOrNull
  serie: ISerie
  serie_id: number
  slug: StringOrNull
  status: StatusEnum
  streams_list: IStreamsList
  tournament: ITournament
  tournament_id: number
  videogame_title: IVideoGameTitle
  videogame_version: IVideoGameVersion
  winner: IPlayerOpponent | ITeamOpponent
  winner_id: number
  winner_type: WinnerTypeEnum
}

export interface ILiveMatch {
  begin_at: DateOrNull
  detailed_stats: boolean
  draw: boolean
  end_at: DateOrNull
  forfeit: boolean
  game_advantage: NumberOrNull
  number_of_games: number
  match_type: MatchTypeEnum
  results: IMatchPlayerResult[] | IMatchTeamResult[]
  videogame: IVideoGame
  opponents: ITeamOpponent[] | IPlayerOpponent[]
  winner_type: WinnerTypeEnum
  games: IMatch[]
}
