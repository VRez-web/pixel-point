<script lang="ts" setup>
import TournamentIcon from "@/components/ui/icons/TournamentIcon.vue";
import {computed} from "vue";
import {ITournament} from "@/types/tournament";
import {ISerie} from "@/types/serie";

interface IProps {
  tournament: ITournament
  serie: ISerie
}

const props = defineProps<IProps>()

const prizepool = computed(() => props.tournament.prizepool ? props.tournament.prizepool : '?')
</script>

<template>
  <v-sheet class="pa-2" elevation="2" rounded>
    <v-row class="ma-0" justify="center" align="center">
      <TournamentIcon />
      <h2 class="ml-2"> Tournament </h2>
    </v-row>
    <v-col class="ma-0 pl-16">
      <p>{{ serie.full_name }}</p>
      <p>prizepool: {{ prizepool }}</p>
      <p>tier: {{ tournament.tier }}</p>
    </v-col>
  </v-sheet>
</template>
