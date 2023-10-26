<script setup lang="ts">
import HomeMatchesSection from "@/components/home/HomeMatchesSection.vue";
import {ref} from "vue";
import {useFetch} from "@/composables/app/useFetch";
import {ILiveMatch} from "@/types/base/matches";

const {
  isLoading: isLoadingLiveMatches,
  isError: isErrorLiveMatches,
  data: liveMatchesData
} = useFetch<ILiveMatch[]>('matches/running?sort=-begin_at')

const liveMatches = ref({
  data: liveMatchesData,
  isLoading: isLoadingLiveMatches,
  isError: isErrorLiveMatches
})

</script>

<template>
  <div class="d-flex">
    <HomeMatchesSection :live-matches="liveMatches" />
    <v-sheet>
      askd
    </v-sheet>
  </div>
</template>
