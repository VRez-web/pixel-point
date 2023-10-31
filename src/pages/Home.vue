<script setup lang="ts">
import HomeMatchesSection from "@/components/home/HomeMatchesSection.vue";
import {Ref, ref} from "vue";
import {useFetch} from "@/composables/app/useFetch";
import {TMatchList} from "@/types/match/match";

const matches: Ref = ref({
  data: [],
  isLoading: true,
  isError: false
})

const getMatches = (tabName: string = 'live') => {
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

getMatches()
</script>

<template>
  <div class="d-flex">
    <HomeMatchesSection :matches="matches" @change-tab="getMatches" />
    <v-sheet>
      askd
    </v-sheet>
  </div>
</template>
