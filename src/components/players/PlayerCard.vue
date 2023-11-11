<script lang="ts" setup>
import NoPlayerAvatar from "@/components/ui/NoPlayerAvatar.vue";
import {IPlayer} from "@/types/player";

interface IProp {
  player: IPlayer
}

defineProps<IProp>()
</script>

<template>
  <v-card class="mr-2" border="1px" rounded>
    <v-img
        v-if="player.image_url"
        :src="player.image_url"
        width="150px"
        height="150px"
    />
    <NoPlayerAvatar v-else :width="150" :height="150"/>
    <v-card-title class="text-center text-body-1">
      {{ player.name }}
    </v-card-title>
  </v-card>
</template>
