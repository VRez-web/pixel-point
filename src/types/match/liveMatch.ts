import {IMapPick, IMatch} from "@/types/match/match";

export interface ILiveMatch extends IMatch {
  map_picks?: IMapPick
}
