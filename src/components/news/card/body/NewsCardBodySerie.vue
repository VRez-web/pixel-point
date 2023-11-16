<script lang="ts" setup>
import {ISerieNews} from "@/types/news";

interface IProp {
  model: ISerieNews
}

defineProps<IProp>()
</script>

<template>
  <v-col class="pa-0 text-body-2">
    <v-row>{{ model.full_name }} {{ model.name }}</v-row>
    <v-row>
      league: {{ model.league.name }}
    </v-row>
  </v-col>
</template>
