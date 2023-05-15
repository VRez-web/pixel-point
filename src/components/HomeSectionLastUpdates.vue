<script setup lang="ts">
import {IGame} from "@/types/games/IGamesList";

const props = defineProps<{
  releases: IGame[]
}>()
</script>

<template>
  <h4 class="text-h4">Last updates:</h4>
  <div v-for="release in releases" :key="release.id">
    {{ release.name }}
  </div>
</template>
