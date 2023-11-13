<script lang="ts" setup>
import {IPlayerOpponentsMatch} from "@/types/player";
import PlayerCard from "@/components/players/PlayerCard.vue";

interface IProp {
  players: IPlayerOpponentsMatch[]
}

defineProps<IProp>()
</script>

<template>
  <v-col class="pl-0">
    <PlayerCard v-for="player in players" :key="player.id" :player="player" class="mb-2" style="max-width: 150px"/>
  </v-col>
</template>
