<script setup lang="ts">
import NewsCard from "@/components/news/card/NewsCard.vue";
import AppLoader from "@/components/app/AppLoader.vue";
import {INews} from "@/types/news";

interface INewsProp {
  data: INews[]
  isLoading: boolean,
  isError: boolean
}

interface IProp {
  news: INewsProp
}

defineProps<IProp>()
</script>

<template>
  <v-sheet class="w-75">
    <h3>Last updates</h3>
    <AppLoader v-if="news.isLoading" />
    <v-row v-else wrap>
      <NewsCard v-for="newsItem in news.data" :key="newsItem.id" :news-item="newsItem" />
    </v-row>
  </v-sheet>
</template>
