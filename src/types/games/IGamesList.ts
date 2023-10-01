import {IBaseList} from "@/types/base/IBaseList";
import {DateOrNull, NumberOrNull, StringOrNull} from "@/types/base/BaseTypes";

// TODO: will think where could move that types and refactor

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

export interface IGameDetails {
  aliases: StringOrNull
  api_detail_url: StringOrNull
  characters: string,
  concepts: Object[] | null
  date_added: DateOrNull
  date_last_updated: DateOrNull,
  deck: StringOrNull
  description: StringOrNull
  developers: Object[] | null
  expected_release_day: NumberOrNull
  expected_release_month: NumberOrNull
  expected_release_quarter: NumberOrNull
  expected_release_year: NumberOrNull
  first_appearance_characters: Object[] | null
  first_appearance_concepts: Object[] | null
  first_appearance_locations: Object[] | null
  first_appearance_objects: Object[] | null
  first_appearance_people: Object[] | null
  franchises: Object[] | null
  genres: Object[] | null
  guid: string
  id: number
  images: ImagesInfo[]
  image: ImagesInfo
  image_tags: Object[] | null,
  killed_characters: Object[] | null
  locations: Object[] | null
  name: string
  number_of_user_reviews: number
  objects: Object[] | null
  original_game_rating: OriginalGameRating[] | null
  original_release_date: DateOrNull
  platforms: Platforms[]
  people: Object[] | null
  videos: []
  themes: Object[] | null
  site_detail_url: StringOrNull
  similar_games: Object[] | null
  publishers: Object[] | null
  releases: Object[] | null
}

export interface IGamesList extends IBaseList {
  results: IGame[] | null
}

export interface IGameDetailsResult extends IBaseList {
  results: IGameDetails | null
}
