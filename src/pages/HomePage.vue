<script setup lang="ts">
import HomeMatchesSection from "@/components/home/HomeMatchesSection.vue";
import HomeNewsSection from "@/components/home/HomeNewsSection.vue";
import {onBeforeMount, Ref, ref} from "vue";
import {useFetch} from "@/composables/app/useFetch";
import {INews} from "@/types/news";
import {TMatchList} from "@/types/match/matchTypes";

const matches: Ref = ref({
  data: [],
  isLoading: true,
  isError: false
})

const fetchMatches = (tabName: string = 'live') => {
  interface IUrlsForDate {
    [key: string]: string
  }

  const urlsForDate: IUrlsForDate = {
    'past': 'matches/past?per_page=20',
    'live': 'matches/running?sort=-begin_at&per_page=20',
    'upcoming': 'matches/upcoming?per_page=20',
  }

  const {
    isLoading,
    isError,
    data
  } = useFetch<TMatchList>(urlsForDate[tabName])
  matches.value.data = data
  matches.value.isError = isError
  matches.value.isLoading = isLoading
}


const news: Ref = ref({
  data: [],
  isLoading: true,
  isError: false
})
const fetchNews = () => {
  const {isError, isLoading, data} =
      useFetch<INews[]>('incidents?per_page=20&type=[league,serie,team,tournament,player]')
  news.value.data = data
  news.value.isError = isError
  news.value.isLoading = isLoading
}

onBeforeMount(() => {
  fetchMatches()
  fetchNews()
})
</script>

<template>
  <div class="d-flex">
    <HomeMatchesSection :matches="matches" @change-tab="fetchMatches" />
    <HomeNewsSection :news="news" />
  </div>
</template>
