<script setup lang="ts" >
import {onBeforeMount, reactive} from "vue";
import {getGames} from "@/services/games";
import {IGamesList} from "@/types/games/IGamesList";

let games: IGamesList | {} = reactive({})

const getMostExpectedGames = async () => {
  const settings = `&filter=expected_release_year:2023&limit=20`
  games = await getGames(settings)
}

onBeforeMount(() => getMostExpectedGames())
</script>{
<template>
  home
</template>
