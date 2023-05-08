<script setup lang="ts">
import {computed, onBeforeMount, Ref, ref} from "vue";
import {getGames} from "@/services/games";
import {IGame, IGamesList} from "@/types/games/IGamesList";
import HomeSlider from "@/components/HomeSlider.vue";

const games: Ref<IGame[] | null> = ref(null)

const imagesSlider = computed(() => games.value?.map(game => ({
      img: game.image.medium_url,
      descr: game.deck,
      name: game.name
    }))
)

const getMostExpectedGames = async (): Promise<void> => {
  const settings = `&filter=expected_release_year:2023&limit=20`
  const res = await getGames(settings)
  games.value = res.results
}

onBeforeMount(() => getMostExpectedGames())
</script>

<template>
  <HomeSlider :images="imagesSlider" />
</template>
