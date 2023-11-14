<script lang="ts" setup>
import NoImageIcon from "@/components/ui/icons/NoImageIcon.vue";
import {TMatchResult, OpponentTypeList} from "@/types/match";
import {computed} from "vue";

interface IProp {
  opponents: OpponentTypeList
  score: TMatchResult
}

const props = defineProps<IProp>()

// TODO: fix bugs with ts
const opponentWithScore = computed(() => props.opponents.map(({opponent}) => {
  return {
    ...opponent,
    score: props.score.find((score) => (score.team_id || score.player_id) === opponent.id)?.score
  }
}))
const firstOpponent = computed(() => opponentWithScore.value.at(0))
const secondOpponent = computed(() => opponentWithScore.value.at(1))
</script>

<template>
  <v-row align="center" justify="center">
    <div class="team d-flex align-center flex-column mr-auto" :title="firstOpponent?.name">
      <img v-if="firstOpponent?.image_url" :src="firstOpponent?.image_url" alt="team or player logo" class="team-logo">
      <NoImageIcon v-else />
      <p class="team-name">{{ firstOpponent?.name }}</p>
    </div>
    <div>
      <span>{{ firstOpponent?.score }}</span>
      <span>:</span>
      <span>{{ secondOpponent?.score }}</span>
    </div>
    <div class="team d-flex align-center flex-column ml-auto" :title="secondOpponent?.name">
      <img v-if="secondOpponent?.image_url" :src="secondOpponent?.image_url" alt="team or player logo" class="team-logo">
      <NoImageIcon v-else />
      <p class="team-name">{{ secondOpponent?.name }}</p>
    </div>
  </v-row>
</template>

<style lang="scss" scoped>
.team {
  width      : 75px;
  margin-top : 4px;

  &-logo {
    width      : 25px;
    height     : 25px;
    object-fit : contain;
  }

  p {
    display            : -webkit-box;
    text-align         : center;
    overflow           : hidden;
    text-overflow      : ellipsis;
    -webkit-line-clamp : 1;
    -webkit-box-orient : vertical;
  }

  &-name {
    font-size : 12px;
  }
}
</style>
