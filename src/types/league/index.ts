import {StringOrNull} from "@/types/base/BaseTypes";

export interface ILeague {
  id: number
  image_url: StringOrNull
  modified_at: Date
  name: string
  slug: string
  url: StringOrNull
}
