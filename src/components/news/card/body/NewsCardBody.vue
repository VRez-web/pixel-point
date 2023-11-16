<script lang="ts" setup>
import NewsCardBodyTeam from "@/components/news/card/body/NewsCardBodyTeam.vue";
import NewsCardBodyTournament from "@/components/news/card/body/NewsCardBodyTournament.vue";
import NewsCardBodySerie from "@/components/news/card/body/NewsCardBodySerie.vue";
import NewsCardBodyLeague from "@/components/news/card/body/NewsCardBodyLeague.vue";
import {NewsObjectType, NewsType} from "@/types/news";
import {computed} from "vue";
import type {Component} from 'vue'

interface componentNames {
  [key: string]: Component;
}

interface IProp {
  info: NewsObjectType
  type: NewsType
}

const props = defineProps<IProp>()

const newsBody = computed(() => {
  const componentNames: componentNames = {
    'team': NewsCardBodyTeam,
    'tournament': NewsCardBodyTournament,
    'serie': NewsCardBodySerie,
    'league': NewsCardBodyLeague
  }

  return componentNames[props.type]
})
</script>

<template>
  <component :is="newsBody" :model="info" />
</template>
