<script setup lang="ts">
import HomeSlider from "@/components/HomeSlider.vue";
import HomeSectionLastUpdates from "@/components/HomeSectionLastUpdates.vue";
import {computed, onBeforeMount, ref} from "vue";
import {getGames} from "@/services/games";
import {IGame} from "@/types/games/IGamesList";

const games = ref<IGame[] | null>(null)
const lastReleases = ref<IGame[] | null>(null)

const sliderImages = computed(() => games.value?.map(game => ({
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

const getLastReleases = async (): Promise<void> => {
  const date = new Date().toUTCString()
  const settings = `&filter=date_added:2023-01-01 00:00|2023-12-12 00:00:00&limit=20&offset=900`
  const res = await getGames(settings)
  lastReleases.value = res.results
}


onBeforeMount(() => {
  getMostExpectedGames()
  getLastReleases()
})
</script>

<template>
  <HomeSlider :images="sliderImages" />
  <HomeSectionLastUpdates :releases="lastReleases" />
</template>
