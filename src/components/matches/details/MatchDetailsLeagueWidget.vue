<script lang="ts" setup>
import {useMatchDetails} from "@/store/match/matchDetails";
import {storeToRefs} from "pinia";

const store = useMatchDetails()

const {match} = storeToRefs(store)
</script>

<template>
  <v-sheet class="pa-2" elevation="2" rounded>
    <h2 class="text-center"> League </h2>
    <v-row class="ma-0" justify="center" align="center">
      <img v-if="match?.league.image_url" :src="match?.league.image_url" alt="" class="w-25">
      <p class="ml-2">{{ match?.league.name}}</p>
    </v-row>
  </v-sheet>
</template>
