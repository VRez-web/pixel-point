<script lang="ts" setup>
import MatchIcons from "@/components/MatchIcons.vue";
import CardMatchesInfoOpponents from "@/components/CardMatchesInfoOpponents.vue";
import {computed} from "vue";
import {IMatch, MATCH_TYPE} from "@/types/match/match";
import {formatDate} from "@/utils/common";

interface IProps {
  model: IMatch
}

const props = defineProps<IProps>()

const date = computed<string>(() => props.model.begin_at
    ? formatDate(props.model.begin_at, {hour: "numeric", minute: "numeric",})
    : '')
const matchType = computed(() => MATCH_TYPE[props.model.match_type])
</script>

<template>
  <v-row class="match w-100 text-white rounded pa-1 mr-0 ml-0 mb-1 mt-0">
    <v-col>
      <v-row align-content="start" justify="center" class="text-subtitle-2">
        <div class="videogame-logo  mr-auto" :title="model.videogame.name">
          <MatchIcons :id="model.videogame.id" />
        </div>
        <p>{{ matchType }} {{ model.number_of_games }}</p>
        <p class="match-date ml-auto">{{ date }}</p>
      </v-row>
      <CardMatchesInfoOpponents :opponents="model.opponents" :score="model.results" />
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
