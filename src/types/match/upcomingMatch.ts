import {IMapPick, IMatch} from "@/types/match/index";

export interface IUpcomingMatch extends IMatch {
  map_picks?: IMapPick
}
