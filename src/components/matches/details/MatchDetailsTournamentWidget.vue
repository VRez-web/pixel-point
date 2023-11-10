<script lang="ts" setup>
import TournamentIcon from "@/components/ui/icons/TournamentIcon.vue";
import {useMatchDetails} from "@/store/match/matchDetails";
import {storeToRefs} from "pinia";
import {computed} from "vue";

const store = useMatchDetails()

const {match} = storeToRefs(store)

const prizepool = computed(() => match.value?.tournament.prizepool ? match.value?.tournament.prizepool : '?')
</script>

<template>
  <v-sheet class="pa-2" elevation="2" rounded>
    <v-row class="ma-0" justify="center" align="center">
      <TournamentIcon />
      <h2 class="ml-2"> Tournament </h2>
    </v-row>
    <v-col class="ma-0 text-center">
      <p>{{ match?.serie.full_name }}</p>
      <p>prizepool: {{ prizepool }}</p>
    </v-col>
  </v-sheet>
</template>
