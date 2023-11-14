import {DateOrNull, NumberOrNull, StringOrNull} from "@/types/base/BaseTypes";
import {OpponentType} from "@/types/match";

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
  winner_type: OpponentType
  year: NumberOrNull
}
