<script setup lang="ts">
import {IGame} from "@/types/games/IGamesList";
import GameCard from "@/components/GameCard.vue";

const props = defineProps<{
  releases: IGame[]
}>()
</script>

<template>
  <h4 class="text-h4 mb-2">Last updates:</h4>
  <GameCard v-for="release in releases" :key="release.id" :model="release" />
</template>
