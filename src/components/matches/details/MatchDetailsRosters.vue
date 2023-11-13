<script lang="ts" setup>
import {IMatchOpponents} from "@/types/match";
import MatchDetailsRostersTeams from "@/components/matches/details/MatchDetailsRostersTeams.vue";
import MatchDetailsRostersPlayers from "@/components/matches/details/MatchDetailsRostersPlayers.vue";

interface IProp {
  rosters: IMatchOpponents
}

defineProps<IProp>()
</script>

<template>
  <v-col class="mt-3">
    <h3>Rosters:</h3>
    <MatchDetailsRostersTeams v-if="rosters.opponent_type === 'Team'" :teams="rosters.opponents" />
    <MatchDetailsRostersPlayers v-else :players="rosters.opponents" />
  </v-col>
</template>
