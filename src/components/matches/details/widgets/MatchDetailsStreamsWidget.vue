<script lang="ts" setup>
import {IStream} from "@/types/match";

interface IProp {
  streams: IStream[]
}

defineProps<IProp>()
</script>

<template>
  <v-sheet class="pa-2 mt-3" elevation="2" rounded>
    <h2 class="text-center"> Streams </h2>
    <v-col>
      <v-row v-for="({language, raw_url, official}, i) in streams" :key="i" align="end" class="text-body-2">
        <p class="mr-2">[{{ language }}]</p>
        <a :href="raw_url" target="_blank" class="text-blue-accent-3">
          смотреть <span v-if="official">(official)</span>
        </a>
      </v-row>
    </v-col>
  </v-sheet>
</template>
