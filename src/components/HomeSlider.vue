<script setup lang="ts">
interface IImages {
  img: string
  descr?: string
  name?: string
}

const props = defineProps<{
  images: IImages[]
}>()
</script>

<template>
  <v-sheet class="mx-auto w-100">
    <h3 class="pl-lg-10">Most expected games</h3>
    <v-slide-group class="pa-4 pt-0" selected-class="bg-success" show-arrows>
      <v-slide-group-item v-for="({img}, i) in images" :key="i" v-slot="{toggle, selectedClass }">
        <v-card
            :class="['ma-4', selectedClass]"
            :image="img"
            height="200"
            width="100"
            @click="toggle"
        />
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>
