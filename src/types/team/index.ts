import {StringOrNull} from "@/types/base/BaseTypes";

export interface ITeam {
  acronym: StringOrNull
  id: number
  image_url: StringOrNull
  location: StringOrNull
  modified_at: Date
  name: string
  slug: StringOrNull
}
