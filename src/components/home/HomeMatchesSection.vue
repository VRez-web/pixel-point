<script lang="ts" setup>
import CardMatchesInfo from "@/components/home/HomeMatchesCardInfo.vue";
import {Ref, ref} from "vue";
import {TMatchList} from "@/types/match/matchTypes";

interface IMatchesProp {
  data: TMatchList
  isLoading: boolean
  isError: boolean
}

interface IProps {
  matches: IMatchesProp
}

defineProps<IProps>()

const emit = defineEmits<{
  (e: 'change-tab', tabName: string): void
}>()

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
      <p v-else-if="!matches.data.length" class="text-center">No current {{ activeTab }} matches</p>
      <CardMatchesInfo v-else v-for="(match, i) in matches.data" :key="i" :match="match" />
    </v-col>
  </v-sheet>
</template>

<style lang="scss" scoped>
.min-height {
  min-height : 150px;
}
</style>
