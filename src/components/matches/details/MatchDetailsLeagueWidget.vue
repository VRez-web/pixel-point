<script lang="ts" setup>
import {ILeague} from "@/types/league";

interface IProp {
  league: ILeague
}

defineProps<IProp>()
</script>

<template>
  <v-sheet class="pa-2" elevation="2" rounded>
    <h2 class="text-center"> League </h2>
    <v-row class="ma-0" justify="center" align="center">
      <img v-if="league.image_url" :src="league.image_url" alt="" class="w-25">
      <p class="ml-2">{{ league.name }}</p>
    </v-row>
  </v-sheet>
</template>
