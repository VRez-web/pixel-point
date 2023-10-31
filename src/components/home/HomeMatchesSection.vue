<script lang="ts" setup>
import CardMatchesInfo from "@/components/CardMatchesInfo.vue";
import {computed, Ref, ref} from "vue";
import {filterGames} from "@/utils/common";
import {TypeMatchList} from "@/types/match/match";

interface IMatchesProp {
  data: TypeMatchList
  isLoading: boolean
  isError: boolean
}

interface IProps {
  matches: IMatchesProp
}

const props = defineProps<IProps>()

const emit = defineEmits<{
  (e: 'change-tab', tabName: string): void
}>()

const formatMatchesData = computed(() => props.matches.data?.filter(filterGames))

const tabs = [
  {name: 'past', text: 'past', class: 'mr-2'},
  {name: 'live', text: 'live', class: 'mr-2'},
  {name: 'upcoming', text: 'upcoming', class: ''}
]
const activeTab: Ref<string> = ref('live')

const changeActiveTab = (tabName: string) => {
  if (activeTab.value === tabName) return
  activeTab.value = tabName
  emit('change-tab', tabName)
}
</script>

<template>
  <v-sheet width="15%" class="mr-5 pa-2" :elevation="3" rounded>
    <v-col class="min-height pa-0">
      <h3 class="mb-4 text-center">Matches</h3>
      <v-row class="ml-0 mb-3" justify="center">
        <v-btn
            v-for="(tab, i) in tabs"
            :key="i"
            :class="[tab.class,{'bg-blue-grey-lighten-1':tab.name === activeTab}]"
            color="blue"
            size="x-small"
            flat
            @click="changeActiveTab(tab.name)"
        >
          {{ tab.text }}
        </v-btn>
      </v-row>
      <v-skeleton-loader v-if="matches.isLoading" :elevation="2" type="paragraph" />
      <p v-else-if="!formatMatchesData.length" class="text-center">No current {{ activeTab }} matches</p>
      <CardMatchesInfo v-else v-for="(match, i) in formatMatchesData" :key="i" :model="match" />
    </v-col>
  </v-sheet>
</template>

<style lang="scss" scoped>
.min-height {
  min-height : 150px;
}
</style>
