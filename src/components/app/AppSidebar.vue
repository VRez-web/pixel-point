<script setup lang="ts">
import {useGenresStore} from "@/store/genres";

const storeGenres = useGenresStore()
</script>

<template>
  <v-col class="border" cols="3">
    <v-sheet rounded="lg">
      <h2 class="border-b">Categories</h2>
      <v-list class="d-flex justify-space-between flex-wrap" rounded="lg">
        <v-list-item
            v-for="genre in storeGenres.genres"
            :key="genre.id"
            :title="genre.name"
            class="w-48 px-1 mb-2 bg-blue-lighten-4"
            rounded="lg"
            :min-height="20"
            link
        />
      </v-list>
    </v-sheet>
  </v-col>
</template>

<style lang="scss" scoped>
.w-48 {
  width : 48%;
}
</style>
