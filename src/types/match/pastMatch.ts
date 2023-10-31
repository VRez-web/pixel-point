import {IMapPick, IMatch} from "@/types/match/match";

export interface IPastMatch extends IMatch {
  map_picks?: IMapPick
}
