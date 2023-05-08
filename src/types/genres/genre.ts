import {IBaseList} from "@/types/base/IBaseList";
import {StringOrNull} from "@/types/base/BaseTypes";
import {ImagesInfo} from "@/types/games/IGamesList";

export interface IGenre {
  api_detail_url: StringOrNull
  date_added: Date
  date_last_updated: Date
  deck: StringOrNull
  description: StringOrNull
  guid: StringOrNull
  id: number
  image: ImagesInfo
  name: StringOrNull
  site_detail_url: StringOrNull
}

export interface IGenreList extends IBaseList {
  results: IGenre[] | null
}
