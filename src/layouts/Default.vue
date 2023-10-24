<script setup lang="ts">
import AppHeader from "@/components/app/AppHeader.vue";</script>

<template>
  <v-app>
    <AppHeader />
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-sheet min-height="90vh" rounded="lg">
          <v-container>
            <slot />
          </v-container>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
.w-75 {
  width : 75%;
}
</style>
