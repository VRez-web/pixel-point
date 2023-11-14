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
    <v-row justify="center" align="center">
      <v-img
          v-if="league.image_url"
          :src="league.image_url"
          alt="league icon"
          width="75px"
          height="75px"
      />
      <p class="ml-2">{{ league.name }}</p>
    </v-row>
  </v-sheet>
</template>

<style lang="scss" scoped>
.v-img {
  max-width : 25%;
}
</style>
