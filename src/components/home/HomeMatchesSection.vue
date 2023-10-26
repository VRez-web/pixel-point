<script lang="ts" setup>
import CardMatchesInfo from "@/components/CardMatchesInfo.vue";
import {ILiveMatch} from "@/types/base/matches";
import {computed} from "vue";
import {filterGames} from "@/utils/common";

interface ILiveMatchProp {
  data: ILiveMatch[]
  isLoading: boolean
  isError: boolean
}

interface IProps {
  liveMatches: ILiveMatchProp
}

const props = defineProps<IProps>()

const formatLiveMatchesData = computed(() => props.liveMatches.data?.filter(filterGames))
</script>

<template>
  <v-sheet width="15%" class="mr-5 pa-2" border rounded>
    <v-col class="min-height pa-0">
      <h3 class="mb-4 text-center">Live matches</h3>
      <v-skeleton-loader v-if="liveMatches.isLoading" :elevation="2" type="card" />
      <p v-else-if="!formatLiveMatchesData.length">No current live matches</p>
      <CardMatchesInfo v-else v-for="(match, i) in formatLiveMatchesData" :key="i" :model="match" />
    </v-col>
  </v-sheet>
</template>

<style lang="scss" scoped>
.min-height {
  min-height : 150px;
}
</style>
