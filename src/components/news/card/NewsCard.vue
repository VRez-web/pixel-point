<script lang="ts" setup>
import NewsCardBody from "@/components/news/card/body/NewsCardBody.vue";
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
</script>

<template>
  <v-card
      class="w-48 mb-1 mr-1"
      color="blue-accent-2"
      variant="tonal"
      link
  >
    <v-card-item class="pa-1">
      <v-row align="start" class="text-body-1 mb-1">
        <v-row align="center" justify="end" class="position-absolute" style="right: 10px">
          <GameTypeIcon :id="videoGameId" />
          <p class="ml-2"> {{ newsItem.type }} ({{ newsItem.change_type }}) </p>
        </v-row>
      </v-row>
      <NewsCardBody :type="newsItem.type" :info="newsItem.object" />
      <p class="text-caption text-end">{{ formatUpdateDate }}</p>
    </v-card-item>
  </v-card>
</template>

<style lang="scss" scoped>
.w-48 {
  width : 48%;
}
</style>
