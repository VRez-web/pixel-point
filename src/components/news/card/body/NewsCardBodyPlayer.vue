<script lang="ts" setup>
import {IPlayerNews} from "@/types/news";

interface IProp {
  model: IPlayerNews
}

defineProps<IProp>()
</script>

<template>
  <v-col class="pa-0 text-body-2">
    <v-row>Player {{ model.name}}</v-row>
    <v-row>
    </v-row>
  </v-col>
</template>
