import {IBaseList} from "@/types/base/IBaseList";
import {DateOrNull, NumberOrNull, StringOrNull} from "@/types/base/BaseTypes";

// TODO: will think where could move that types

export type ImagesInfo = {
  icon_url: StringOrNull
  image_tags: StringOrNull
  medium_url: StringOrNull
  original_url: StringOrNull
  screen_large_url: StringOrNull
  screen_url: StringOrNull
  small_url: StringOrNull
  super_url: StringOrNull
  thumb_url: StringOrNull
  tiny_url: StringOrNull
}

export type ImageTags = {
  api_detail_url: StringOrNull
  name: StringOrNull
  total: number
}

export type OriginalGameRating = {
  api_detail_url: StringOrNull
  id: number
  name: StringOrNull
}

export type Platforms = {
  abbreviation: string
  api_detail_url: StringOrNull
  id: number
  name: string
  site_detail_url: StringOrNull
}

//
export interface IGame {
  aliases: StringOrNull
  api_detail_url: StringOrNull
  date_added: Date
  date_last_updated: Date
  deck: string
  description: StringOrNull,
  expected_release_day: NumberOrNull
  expected_release_month: NumberOrNull
  expected_release_quarter: NumberOrNull
  expected_release_year: NumberOrNull
  guid: string
  id: number
  image: ImagesInfo,
  image_tags: ImageTags
  name: string
  number_of_user_reviews: number
  original_game_rating: OriginalGameRating[] | null
  original_release_date: DateOrNull
  platforms: Platforms[]
  site_detail_url: StringOrNull
}

export interface IGamesList extends IBaseList {
  results: IGame[] | null
}
