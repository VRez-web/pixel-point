<script setup lang="ts">
import {IGame} from "@/types/games/IGamesList";
import {computed} from "vue";

const props = defineProps<{
  model: IGame
}>()

const description = computed<string>(() => props.model.description || props.model.deck)
</script>

<template>
  <v-card class="mb-2" :border="true">
    <v-card-title>{{ model.name }}</v-card-title>
    <v-spacer></v-spacer>
    <div class="d-flex">
      <div>
        <v-img :src="model.image.small_url" :width="250" :height="300"  cover/>
      </div>
      <div>
        <v-card-text>{{ description }}</v-card-text>
        <v-card-subtitle>Last time updated:{{ model.date_last_updated }}</v-card-subtitle>
      </div>
    </div>
  </v-card>
</template>
