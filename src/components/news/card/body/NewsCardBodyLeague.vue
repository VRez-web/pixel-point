<script lang="ts" setup>
import {ILeagueNews} from "@/types/news";

interface IProp {
  model: ILeagueNews
}

defineProps<IProp>()
</script>

<template>
  <v-col class="pa-0 text-body-2">
    <v-row>{{ model.name }}</v-row>
    <v-row>
    </v-row>
  </v-col>
</template>
