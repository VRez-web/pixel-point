<script lang="ts" setup>
import GameTypeIcon from "@/components/GameTypeIcon.vue";
import {INews} from "@/types/news";
import {computed} from "vue";
import {formatDate} from "@/utils/common";

interface IProp {
  newsItem: INews
}

const props = defineProps<IProp>()

// TODO: think about spicif component for any type and add more information
const videoGameId = computed(() => props.newsItem.object?.videogame?.id || props.newsItem.object.current_videogame.id)
const formatUpdateDate = computed(() => formatDate(new Date(props.newsItem.modified_at), {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
}))
const title = computed(() => props.newsItem.type === 'serie' ? props.newsItem.object.full_name : props.newsItem.object.name)
</script>

<template>
  <v-card
      class="w-48 mb-1 mr-1"
      color="blue-accent-2"
      variant="tonal"
      link
  >
    <v-card-item>
      <div>
        <div class="text-overline mb-1" />
        <v-row justify="space-between" align="start" class="text-body-1 mb-1">
          <v-row align="start">
            <GameTypeIcon :id="videoGameId" />
            <p class="ml-2"> {{ newsItem.type }} </p>
          </v-row>
          <p> {{ newsItem.change_type }}</p>
        </v-row>
        <p class="text-body-1 mt-2">{{ title }}</p>
      </div>
    </v-card-item>
    <v-card-actions class="align-end">
      <p class="mr-auto text-caption">updated time: {{ formatUpdateDate }}</p>
      <v-btn size="small" variant="outlined">
        more details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped>
.w-48 {
  width : 48%;
}
</style>
