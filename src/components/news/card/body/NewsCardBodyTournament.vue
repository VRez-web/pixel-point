<script lang="ts" setup>
import {ITournamentNews} from "@/types/news";

interface IProp {
  model: ITournamentNews
}

defineProps<IProp>()
</script>

<template>
  <v-col class="pa-0 text-body-2">
    <v-row>{{ model.serie.full_name }} {{ model.name }}</v-row>
    <v-row>
      Teams: <span v-for="{name, id} in model.teams" :key="id" class="pl-2">{{ name}}</span>
    </v-row>
  </v-col>
</template>
