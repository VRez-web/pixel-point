import {IMapPick, IMatch} from "@/types/match/match";

export interface IUpcomingMatch extends IMatch {
  map_picks?: IMapPick
}
