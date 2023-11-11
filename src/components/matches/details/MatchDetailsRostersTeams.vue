<script lang="ts" setup>
import PlayerCard from "@/components/players/PlayerCard.vue";
import NoImageIcon from "@/components/ui/icons/NoImageIcon.vue";
import {ITeamWithPlayers} from "@/types/team";

interface IProp {
  teams: ITeamWithPlayers[]
}

defineProps<IProp>()
</script>

<template>
  <v-col v-for="team in teams" :key="team.id" class="pl-0">
    <v-row align="end" class="border-b-sm pb-1">
      <img v-if="team.image_url" :src="team.image_url" alt="team logo" class="team-logo">
      <NoImageIcon v-else />
      <p class="ml-2">{{ team.name }}</p>
    </v-row>
    <v-row>
      <PlayerCard v-for="player in team.players" :key="player.id" :player="player" />
    </v-row>
  </v-col>
</template>

<style lang="scss" scoped>
.team-logo {
  width : 30px;
}
</style>
