import {IMapPick, IMatch} from "@/types/match/index";

export interface IPastMatch extends IMatch {
  map_picks?: IMapPick
}
