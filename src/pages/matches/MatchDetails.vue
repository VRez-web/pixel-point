<script lang="ts" setup>
import AppLoader from "@/components/app/AppLoader.vue";
import MatchDetailsScore from "@/components/matches/details/MatchDetailsScore.vue";
import MatchDetailsTournamentWidget from "@/components/matches/details/MatchDetailsTournamentWidget.vue";
import MatchDetailsLeagueWidget from "@/components/matches/details/MatchDetailsLeagueWidget.vue";
import {useMatchDetails} from "@/store/match/matchDetails";
import {storeToRefs} from "pinia";

const store = useMatchDetails()

const {match, isLoading, isError} = storeToRefs(store)

</script>


<template>
  <AppLoader v-if="isLoading" />
  <v-row v-else-if="match" class="ma-0">
    <v-col class="ml-0" style="max-width: 15%">Game:</v-col>
    <v-col class="ml-auto mr-auto" style="max-width: 35%">
      <MatchDetailsScore />
    </v-col>
    <v-col class="ml-0" style="max-width: 20%">
      <MatchDetailsTournamentWidget class="mb-5" />
      <MatchDetailsLeagueWidget />
    </v-col>
  </v-row>
</template>
