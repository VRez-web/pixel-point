<script lang="ts" setup>
import AppLoader from "@/components/app/AppLoader.vue";
import MatchDetailsScore from "@/components/matches/details/MatchDetailsScore.vue";
import MatchDetailsTournamentWidget from "@/components/matches/details/MatchDetailsTournamentWidget.vue";
import MatchDetailsLeagueWidget from "@/components/matches/details/MatchDetailsLeagueWidget.vue";
import MatchDetailsRosters from "@/components/matches/details/MatchDetailsRosters.vue";
import {useRoute} from "vue-router";
import {useFetch} from "@/composables/app/useFetch";
import {IMatch, IMatchOpponents} from "@/types/match";


const route = useRoute()

const {data: match, isLoading, isError} = useFetch<IMatch>(`matches/${Number(route.query.id)}`)
const {data: opponents} = useFetch<IMatchOpponents>(`matches/${Number(route.query.id)}/opponents`)

</script>


<template>
  <AppLoader v-if="isLoading" />
  <v-row v-else-if="match" class="ma-0">
    <v-col class="ml-0" style="max-width: 15%">Game:</v-col>
    <v-col>
      <MatchDetailsScore :match="match" class="ml-auto mr-auto" />
      <MatchDetailsRosters v-if="opponents" :rosters="opponents" />
    </v-col>
    <v-col class="ml-0" style="max-width: 20%">
      <MatchDetailsTournamentWidget :serie="match.serie" :tournament="match.tournament" class="mb-5" />
      <MatchDetailsLeagueWidget :league="match.league" />
    </v-col>
  </v-row>
</template>
