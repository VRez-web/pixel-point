<script lang="ts" setup>
import {computed} from "vue";
import {formatDate} from "@/utils/common";
import {useMatchDetails} from "@/store/match/matchDetails";
import {storeToRefs} from "pinia";
import NoImageIcon from "@/components/ui/icons/NoImageIcon.vue";
import {MATCH_GAME_TYPE} from "@/types/match";

// TODO: find out how hint to ts => we can here only if we have "match"
const store = useMatchDetails()
const {match} = storeToRefs(store)

const formatOpponents = computed(() => match.value?.opponents.map(({opponent}) => {
  return {
    ...opponent,
    score: match.value?.results.find((score) => (score.team_id || score.player_id) === opponent.id)?.score
  }
}))
const firstOpponent = computed(() => formatOpponents.value?.at(0))

const secondOpponent = computed(() => formatOpponents.value?.at(1))

const formatEndDate = computed(() => match.value?.end_at ? formatDate(match.value?.end_at, {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
}) : '')

const matchType = computed(() => MATCH_GAME_TYPE[match.value?.match_type])
</script>

<template>
  <h3 class="text-h5 text-center">{{ match?.name }}</h3>
  <v-sheet class="pa-2">
    <v-row justify="center" align="end">
      <v-col v-if="firstOpponent" class="text-center">
        <img v-if="firstOpponent.image_url" class="team-img" :src="firstOpponent.image_url" alt="">
        <NoImageIcon v-else />
        <p>{{ firstOpponent.name }}</p>
      </v-col>
      <v-col justify="center" align="center" class="text-h2">
        <p class="text-caption">{{ matchType }} {{ match?.number_of_games }}</p>
        <v-row justify="center" class="ma-0">
          <p>{{ firstOpponent?.score }}</p>
          <p>:</p>
          <p>{{ secondOpponent?.score }}</p>
        </v-row>
        <p v-if="formatEndDate" class="text-caption mt-1">{{ formatEndDate }}</p>
        <p class="text-body-1 mt-3">{{ match?.status }}</p>
      </v-col>
      <v-col v-if="secondOpponent" class="text-center">
        <img v-if="secondOpponent.image_url" class="team-img" :src="secondOpponent.image_url" alt="">
        <NoImageIcon v-else />
        <p>{{ secondOpponent.name }}</p>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<style lang="scss" scoped>
.team-img {
  width  : 100px;
  height : 100px;
}
</style>
