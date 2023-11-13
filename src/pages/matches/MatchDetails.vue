<script lang="ts" setup>
import AppLoader from "@/components/app/AppLoader.vue";
import MatchDetailsScore from "@/components/matches/details/MatchDetailsScore.vue";
import MatchDetailsTournamentWidget from "@/components/matches/details/widgets/MatchDetailsTournamentWidget.vue";
import MatchDetailsLeagueWidget from "@/components/matches/details/widgets/MatchDetailsLeagueWidget.vue";
import MatchDetailsRosters from "@/components/matches/details/MatchDetailsRosters.vue";
import MatchDetailsStreamsWidget from "@/components/matches/details/widgets/MatchDetailsStreamsWidget.vue";
import MatchIcons from "@/components/MatchIcons.vue";
import {useRoute} from "vue-router";
import {useFetch} from "@/composables/app/useFetch";
import {onBeforeMount} from "vue";
import {IMatch, IMatchOpponents} from "@/types/match";


const route = useRoute()

const {data: match, isLoading, isError} = useFetch<IMatch>(`matches/${Number(route.query.id)}`)
const {data: opponents} = useFetch<IMatchOpponents>(`matches/${Number(route.query.id)}/opponents`)

onBeforeMount(() => window.scrollTo(0, 0))
</script>


<template>
  <AppLoader v-if="isLoading" />
  <v-row v-else-if="match" class="ma-0">
    <v-col class="ml-0" style="max-width: 15%">
      <v-row align="center">
        <MatchIcons :id="match.videogame.id" class="mr-2" />
        {{ match.videogame.name }}
      </v-row>
    </v-col>
    <v-col>
      <MatchDetailsScore :match="match" class="ml-auto mr-auto" />
      <MatchDetailsRosters v-if="opponents" :rosters="opponents" />
    </v-col>
    <v-col class="ml-0" style="max-width: 20%">
      <MatchDetailsTournamentWidget :serie="match.serie" :tournament="match.tournament" class="mb-5" />
      <MatchDetailsLeagueWidget :league="match.league" />
      <MatchDetailsStreamsWidget :streams="match.streams_list" />
    </v-col>
  </v-row>
</template>
