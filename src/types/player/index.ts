import {NumberOrNull, StringOrNull} from "@/types/base/BaseTypes";

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
