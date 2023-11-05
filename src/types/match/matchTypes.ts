import {IPastMatch} from "@/types/match/pastMatch";
import {ILiveMatch} from "@/types/match/liveMatch";
import {IUpcomingMatch} from "@/types/match/upcomingMatch";

export type TMatchList = IPastMatch[] | ILiveMatch[] | IUpcomingMatch []
export type TMatchListItem = IPastMatch | ILiveMatch | IUpcomingMatch
