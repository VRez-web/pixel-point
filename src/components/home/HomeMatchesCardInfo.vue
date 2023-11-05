<script lang="ts" setup>
import MatchIcons from "@/components/MatchIcons.vue";
import CardMatchesInfoOpponents from "@/components/home/HomeMatchesCardInfoOpponents.vue";
import {computed} from "vue";
import {IMatch, GAME_MATCH_TYPE} from "@/types/match";
import {formatDate} from "@/utils/common";

interface IProps {
  match: IMatch
}

const props = defineProps<IProps>()

const matchDate = computed<string>(() => props.match.begin_at
    ? formatDate(props.match.begin_at, {hour: "numeric", minute: "numeric",})
    : '')
const matchType = computed(() => GAME_MATCH_TYPE[props.match.match_type])
</script>

<template>
  <v-row class="match w-100 text-white rounded pa-1 mr-0 ml-0 mb-1 mt-0">
    <v-col>
      <v-row align-content="start" justify="center" class="text-subtitle-2">
        <div class="videogame-logo  mr-auto" :title="match.videogame.name">
          <MatchIcons :id="match.videogame.id" />
        </div>
        <p>{{ matchType }} {{ match.number_of_games }}</p>
        <p class="match-date ml-auto">{{ matchDate }}</p>
      </v-row>
      <CardMatchesInfoOpponents :opponents="match.opponents" :score="match.results" />
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.match {
  background-color : #4ea6ff;

  &-date {
    font-size : 12px;
  }
}

.videogame-logo {
  width  : 25px;
  height : 25px;
}
</style>
