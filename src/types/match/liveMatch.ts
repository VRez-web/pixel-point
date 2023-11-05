import {IMapPick, IMatch} from "@/types/match/index";

export interface ILiveMatch extends IMatch {
  map_picks?: IMapPick
}
