<script lang="ts" setup>
import {computed} from "vue";
import {formatDate} from "@/utils/common";
import NoImageIcon from "@/components/ui/icons/NoImageIcon.vue";
import {IMatch, MATCH_GAME_TYPE} from "@/types/match";

interface IProp {
  match: IMatch
}

const props = defineProps<IProp>()

const formatOpponents = computed(() => props.match.opponents.map(({opponent}) => {
  return {
    ...opponent,
    score: props.match.results.find((score) => (score.team_id || score.player_id) === opponent.id)?.score
  }
}))
const firstOpponent = computed(() => formatOpponents.value?.at(0))

const secondOpponent = computed(() => formatOpponents.value?.at(1))

const formatEndDate = computed(() => props.match.end_at ? formatDate(props.match.end_at, {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
}) : '')

const matchType = computed(() => MATCH_GAME_TYPE[props.match.match_type])
</script>

<template>
  <v-col style="max-width: 50%">
    <h3 class="text-h5 text-center">{{ match?.name }}</h3>
    <v-sheet class="pa-2">
      <v-row justify="center" align="end">
        <v-col v-if="firstOpponent" class="text-center">
          <v-img
              v-if="firstOpponent.image_url"
              :src="firstOpponent.image_url"
              alt="team or player logo"
              width="100"
              height="100"
              class="ml-auto mr-auto"
              cover
          />
          <NoImageIcon v-else />
          <p>{{ firstOpponent.name }}</p>
        </v-col>
        <v-col justify="center" align="center" class="text-h2">
          <p class="text-caption">{{ matchType }} {{ match?.number_of_games }}</p>
          <v-row justify="center">
            <p>{{ firstOpponent?.score }}</p>
            <p>:</p>
            <p>{{ secondOpponent?.score }}</p>
          </v-row>
          <p v-if="formatEndDate" class="text-caption mt-1">{{ formatEndDate }}</p>
          <p class="text-body-1 mt-3">{{ match?.status }}</p>
        </v-col>
        <v-col v-if="secondOpponent" class="text-center">
          <v-img
              v-if="secondOpponent.image_url"
              :src="secondOpponent.image_url"
              alt="team or player logo"
              width="100"
              height="100"
              class="ml-auto mr-auto"
              cover
          />
          <NoImageIcon v-else />
          <p>{{ secondOpponent.name }}</p>
        </v-col>
      </v-row>
    </v-sheet>
  </v-col>
</template>
