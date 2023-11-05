import {DateOrNull, StringOrNull} from "@/types/base/BaseTypes";
import {WinnerTypeEnum} from "@/types/match";

// Ranking 'S' > 'A' > 'B' > 'C' > 'D' > 'Unranked'
enum TierEnum {
  "a",
  "b",
  "c",
  "d",
  "s",
  "unranked"
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
