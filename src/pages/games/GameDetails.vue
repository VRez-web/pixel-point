<script setup lang="ts">


import {computed, onBeforeMount, ref} from "vue";
import {useRoute} from "vue-router";
import {getGameDetails} from "@/services/games";
import {IGameDetails} from "@/types/games/IGamesList";

const route = useRoute()

const gameId = route.params.id as string
const game = ref<IGameDetails | null>(null)


const description = computed(() => game.value?.description || game.value?.deck)
const year = computed(() => game.value?.original_release_date?.slice(0, 4))

const getDetails = async () => {
  const {results} = await getGameDetails(gameId)
  game.value = results
}
onBeforeMount(() => {
  getDetails()
  window.scrollTo(0, 0)
})
</script>

<template>
  <div>
    <div class="d-flex align-start">
      <img :src="game?.image.medium_url" class="w-25" alt="game image">
      <div class="ml-15">
        <h2>
          <span>{{ game?.name }}</span>
          <span>({{ year }})</span>
        </h2>
        <div>
          <div>
            <span v-for="platform in game?.platforms" :key="platform.id" class="text-grey text-subtitle-2 pr-2">
              {{ platform.name }}
            </span>
          </div>
        </div>
        <p class="mt-5">{{ description }}</p>
      </div>
    </div>

  </div>
</template>
