<script lang="ts" setup>
import NoImageIcon from "@/components/ui/icons/NoImageIcon.vue";
import {ITeamNews} from "@/types/news";
import {computed} from "vue";

interface IProp {
  model: ITeamNews
}

const props = defineProps<IProp>()

const location = computed(() => props.model.location || '?')
</script>

<template>
  <v-col class="pa-1">
    <v-row align="center">
      <v-img
          v-if="model.image_url"
          :src="model.image_url"
          alt="team logo"
          width="25"
          height="25"
          max-width="25"
          cover
      />
      <NoImageIcon v-else />
      <p class="text-body-2 ml-2">{{ model.name }}</p>
      <p class="text-body-2 ml-2">[{{ location }}]</p>
    </v-row>
    <v-row align="center" class="text-body-1">
      <span class="pr-2">Roster:</span>
      <span v-for="{id, name} in model.players" :key="id" class="text-body-2 pr-2">
        {{ name }}
      </span>
      <span v-if="!model.players.length">empty</span>
    </v-row>
  </v-col>
</template>
