<script setup lang="ts">
import HomeNewsCard from "@/components/home/HomeNewsCard.vue";
import {INews} from "@/types/news/news";

interface INewsProp {
  data: INews[]
  isLoading: boolean,
  isError: boolean
}

interface IProp {
  news: INewsProp
}

const props = defineProps<IProp>()
</script>

<template>
  <v-sheet class="w-75">
    <h3 class="text-h6">Last updates</h3>
    <!--    <p v-if="news.isLoading">loading</p>-->
    <v-row class="ma-0" wrap>
      <HomeNewsCard v-for="newsItem in news.data" :key="newsItem.id" :news-item="newsItem" />
    </v-row>
  </v-sheet>
</template>
